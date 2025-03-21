import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "@/context-api";
import { Header, Tags, Footer, RouteLoader } from "@/components";
import DefaultMetaData from "@/components/DefaultMetaData";
import "@/styles/global-style.css";
import "@/styles/fonts.css";
import "react-toastify/dist/ReactToastify.css";


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
      <DefaultMetaData />
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
