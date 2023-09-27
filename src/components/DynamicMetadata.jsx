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
      <meta name="description" content={`${data?.desc}`} />
      <meta name="keywords" content={data && keywords} />
    </Head>
  );
}

export default DynamicMetadata;
