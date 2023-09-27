import React from "react";

function MetaData() {
  return (
    <>
      {/*Metadata for Open Graph and Twitter*/}
      <meta property="og:title" content="Tech-Canvas - Unveiling the World of Technology, Coding, and More" />
      <meta property="og:description" content="Explore a diverse array of insightful articles on technology, coding practices, and cutting-edge innovations at Tech-Canvas. Stay updated with the latest trends and expert insights in the tech world." />
      <meta property="og:image" content="/hero.svg" />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta property="og:image:type" content="image/svg+xml" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.tech-canvas.vercel.app" />
      <meta property="og:site_name" content="Tech-Canvas" />
      <meta property="og:locale" content="en_US" />

      <meta property="twitter:title" content="Tech-Canvas - Unveiling the World of Technology, Coding, and More" />
      <meta property="twitter:description" content="Explore a diverse array of insightful articles on technology, coding practices, and cutting-edge innovations at Tech-Canvas. Stay updated with the latest trends and expert insights in the tech world." />
      <meta property="twitter:image:src" content="/hero.svg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@fazle-rabbi-dev" />
      <meta property="twitter:domain" content="https://www.tech-canvas.vercel.app" />

      {/*Additional Metadata*/}
      <meta name="keywords" content="Technology Blog, Coding Tips, Tech Insights, Web Development, Software Engineering, Programming Tutorials, IT Innovations, Developer Resources, fhrabbi github, fazle-rabbi-dev, fazle rabbi dev" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="hostname" content="tech-canvas.vercel.app" />
      <meta name="author" content="Fazle Rabbi" />
      <meta name="description" content="Explore a diverse array of insightful articles on technology, coding practices, and cutting-edge innovations at Tech-Canvas. Stay updated with the latest trends and expert insights in the tech world." />
      <meta name="theme-color" content="#210e31" />

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
      <title>Tech-Canvas - Unveiling the World of Technology, Coding, and More</title>
    </>
  );
}

export default MetaData;
