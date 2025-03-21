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
      <meta key="description" name="description" content={data?.desc} />
      <meta key="keywords" name="keywords" content={data && keywords} />
      
      {/*Metadata for Open Graph and Twitter*/}
      <meta key="og-title" property="og:title" content={data?.title} />
      <meta key="og-description" property="og:description" content={data?.desc} />
      <meta key="og-image" property="og:image" content={`${data?.thumbnail || "https://tech-canvas.vercel.app/og.jpg"}`} />
      <meta key="og-url" property="og:url" content={`https://www.tech-canvas.vercel.app/${data?.slug}`} />

      <meta key="twitter-title" property="twitter:title" content={data?.title} />
      <meta key="twitter-description" property="twitter:description" content={data?.desc} />
      <meta key="twitter-image" property="twitter:image:src" content={`${data?.thumbnail || "https://tech-canvas.vercel.app/og.jpg"}`} />
      <meta key="twitter-domain" property="twitter:domain" content={`https://www.tech-canvas.vercel.app/${data?.slug}`} />
    </Head>
  );
}

export default DynamicMetadata;
