import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { showToast } from "@/utils";
import { useAuthContext } from "@/context-api"

function useAdminLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { authLoading, isLoggedIn } = useAuthContext()
  
  useEffect(() => {
    if(!loading && isLoggedIn){
      router.push("/admin/dashboard")
      // window.location.reload()
    }
  },[authLoading, isLoggedIn]);
  
  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    if(!userName || !password){
      setLoading(false)
      return showToast("Oops! invalid credentials", "error")
    }
    
    try {
      const res = await fetch(`/api/admin/login`, {
        method: "POST",
        body: JSON.stringify({
          username: userName,
          password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response = await res.json();
      if(res.ok){
        showToast(response.message)
        localStorage.setItem("token", response.token)
        router.push('/admin/dashboard/')
        // window.location.reload()
      }else{
        showToast(response.message, "error")
        setLoading(false)
      }
    } catch (e) {
      setLoading(false)
      showToast(e.message, "error")
    }
  };

  return { loading, authLoading, isLoggedIn, handleLogin, userName, password, setUserName, setPassword };
}

export default useAdminLogin;
