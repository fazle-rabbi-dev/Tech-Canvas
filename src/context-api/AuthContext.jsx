import { useState, useEffect, createContext, useContext } from "react";
const AuthContext = createContext();
import { useRouter } from "next/router";
import { showToast } from "@/utils"

function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        
        const res = await fetch("/api/public/validate", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const response = await res.json();
        if (response.success) {
          setIsLoggedIn(true);
          setAuthLoading(false);
          setAuthToken(token);
        } else {
          if (router.pathname.includes("dashboard")) {
            router.push("/");
          }
          setIsLoggedIn(false);
          setAuthLoading(false);
          setAuthToken(null);
        }
      } catch (e) {
        showToast(e.message,"error");
      }
    };

    checkAuthStatus();
    
  }, [router]);

  const value = {
    authLoading,
    isLoggedIn,
    authToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
