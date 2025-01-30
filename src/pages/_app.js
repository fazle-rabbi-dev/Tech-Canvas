import "@/styles/global-style.css";
import "@/styles/fonts.css";
import LoadingBar from "react-top-loading-bar";
import { Header, Tags, Footer, RouteLoader } from "@/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/context-api";
import MetaData from "@/components/MetaData";

export default function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [valueY, setValueY] = useState(0);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    
  }, []);

  return (
    <>
      <AuthProvider>
        <LoadingBar
          color="#7f25eb"
          progress={progress}
          onLoaderFinished={() => {
            setProgress(0);
          }}
          height={3}
        />
        <RouteLoader />
        <ToastContainer />
        <Header />
        <main className="app">
          <Component {...pageProps} />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}
