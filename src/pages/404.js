import { NotFound } from "@/components";
import Head from "next/head";

function PageNotFound() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <NotFound />
    </>
  );
}

export default PageNotFound;
