import Head from "next/head";

function DefaultMetaData() {
  return (
    <Head>
      <meta name="google-site-verification" content="bBOJ8YhTLw-vz1qayvGCHKw3GnTLPoQ4RWRodFvBqI4" />
      
      {/*Metadata for Open Graph and Twitter*/}
      <meta key="og-title" property="og:title" content="Tech-Canvas - Unveiling the World of Technology, Coding, and More" />
      <meta key="og-description" property="og:description" content="Explore a diverse array of insightful articles on technology, coding practices, and cutting-edge innovations at Tech-Canvas. Stay updated with the latest trends and expert insights in the tech world." />
      <meta key="og-image" property="og:image" content="/og.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:type" content="website" />
      <meta key="og-url" property="og:url" content="https://www.tech-canvas.vercel.app" />
      <meta property="og:site_name" content="Tech-Canvas" />
      <meta property="og:locale" content="en_US" />

      <meta key="twitter-title" property="twitter:title" content="Tech-Canvas - Unveiling the World of Technology, Coding, and More" />
      <meta key="twitter-description" property="twitter:description" content="Explore a diverse array of insightful articles on technology, coding practices, and cutting-edge innovations at Tech-Canvas. Stay updated with the latest trends and expert insights in the tech world." />
      <meta key="twitter-image" property="twitter:image:src" content="https://tech-canvas.vercel.app/og.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@fazle-rabbi-dev" />
      <meta key="twitter-domain" property="twitter:domain" content="https://www.tech-canvas.vercel.app" />

      {/*Additional Metadata*/}
      <meta key="keywords" name="keywords" content="Technology Blog, Coding Tips, Tech Insights, Web Development, Software Engineering, Programming Tutorials, IT Innovations, Developer Resources, fhrabbi github, fazle-rabbi-dev, fazle rabbi dev" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="hostname" content="tech-canvas.vercel.app" />
      <meta name="author" content="Fazle Rabbi" />
      <meta key="description" name="description" content="Explore a diverse array of insightful articles on technology, coding practices, and cutting-edge innovations at Tech-Canvas. Stay updated with the latest trends and expert insights in the tech world." />
      <meta name="theme-color" content="#f8f8f8" />

      {/*Link and Canonical Tags*/}
      <link rel="canonical" href="https://tech-canvas.vercel.app" />
      <link rel="author" href="/humans.txt" />
      <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
      <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="/favicon.ico"/>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/*Basic Settings*/}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tech-Canvas - Unveiling the World of Technology, Coding, and More"</title>
    </Head>
  );
}

export default DefaultMetaData;
