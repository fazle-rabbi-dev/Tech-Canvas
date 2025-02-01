import Head from "next/head";

function DynamicMetadata({ data }) {
  let keywords = data?.title.split(" ").join(", ");
  if (keywords?.includes("?")) {
    keywords = keywords.replace("?", "");
    keywords = keywords.toLowerCase();
  }
  
  return (
    <Head>
      <title>{data?.title}</title>
      <meta name="description" content={data?.desc} />
      <meta name="keywords" content={data && keywords} />
      
      {/*Metadata for Open Graph and Twitter*/}
      <meta property="og:title" content={data?.title} />
      <meta property="og:description" content={data?.desc} />
      <meta property="og:image" content={`${data?.thumbnail || "https://tech-canvas.vercel.app/og.jpg"}`} />
      <meta property="og:url" content={`https://www.tech-canvas.vercel.app/${data?.slug}`} />

      <meta property="twitter:title" content={data?.title} />
      <meta property="twitter:description" content={data?.desc} />
      <meta property="twitter:image:src" content={`${data?.thumbnail || "https://tech-canvas.vercel.app/og.jpg"}`} />
    </Head>
  );
}

export default DynamicMetadata;
