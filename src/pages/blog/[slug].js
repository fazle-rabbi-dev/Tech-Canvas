import { useState, useEffect } from "react";
const mongoose = require("mongoose");
const { Blogs } = require("@/mongoose");
import { Facebook } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Loading, Tag, DynamicMetadata } from "@/components";
import { showToast } from "@/utils";
import { formatDate } from "@/utils";
import socialLinks from "@/social-links";

// for code syntax highlight
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/monokai-sublime.css";
import javascript from "highlight.js/lib/languages/javascript";
import java from "highlight.js/lib/languages/java";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";
import c from "highlight.js/lib/languages/c";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("python", python);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("c", c);

function Blog({ blog }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blog) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    hljs.highlightAll();

    const preTags = document.querySelectorAll("pre");

    preTags.forEach((preTag) => {
      const copyButton = document.createElement("button");
      copyButton.innerText = "Copy";
      copyButton.classList.add("copy-button");

      copyButton.addEventListener("click", async () => {
        const codeToCopy = preTag.querySelector("code");
        const codeText = codeToCopy.innerText;

        try {
          await navigator.clipboard.writeText(codeText);
          showToast("Copied successful");
        } catch (e) {
          showToast("Copied failed", "error");
        }
      });

      preTag.appendChild(copyButton);
    });
  }, [loading]);

  /*if (loading) {
    return <Loading />;
  }*/

  return (
    <>
      {blog && <DynamicMetadata data={blog} />}
      <article className="article">
        <section className="">
          <h1 className="text-xl font-extrabold font-satoshi-medium leading-7 tracking-wide">
            {blog?.title}
          </h1>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {formatDate(blog?.date)}
            {" • "}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Fazle Rabbi
          </span>

          {/* Social Links */}
          <div className="flex gap-2 my-2">
            {Object.entries(socialLinks).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`bg-${
                    key === "twitter"
                      ? "[#00acee]"
                      : key === "linkedin"
                      ? "[#0072b1]"
                      : key === "github"
                      ? "gray-500"
                      : key === "instagram"
                      ? "pink-600"
                      : "[#0866FF]"
                  } rounded-full p-2 text-white text-sm`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d={
                        key === "twitter"
                          ? "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                          : key === "linkedin"
                          ? "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                          : key === "github"
                          ? "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                          : key === "instagram"
                          ? "M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7zm14 4.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"                        
                          : "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      }
                    />
                  </svg>
                </button>
              </a>
            ))}
          </div>

          <Image
            width={1000}
            height={200}
            className="my-4 w-full max-h-[500px] object-cover"
            src={`${
              blog?.thumbnail || "https://source.unsplash.com/random/300x200"
            }`}
            alt="Thumbnail"
          />
          <p className="my-2 font-light font-supreme-regular leading-7">
            {blog?.desc}
          </p>
        </section>

        <section
          className="mt-6 blog_main_content font-supreme-regular prose"
          dangerouslySetInnerHTML={{ __html: blog?.sanitizeHTML }}
        ></section>

        {/* Display Tags */}
        <section className="mt-10 mb-5 gap-2 flex flex-wrap">
          {blog?.tags?.map((tag) => (
            <Tag tag={tag} />
          ))}
        </section>
      </article>
    </>
  );
}

export default Blog;

export async function getStaticPaths() {
  const URI = `${process.env.MONGO_URI}/tech-canvas`;
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  let err;
  try {
    await mongoose.connect(URI, connectionParams);
  } catch (e) {
    err = true;
  }

  if (!err) {
    const blogs = await Blogs.find();

    const paths = blogs.map((blog) => {
      return {
        params: {
          slug: blog?.slug,
        },
      };
    });

    return {
      paths,
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  const URI = `${process.env.MONGO_URI}/tech-canvas`;
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  let err;
  try {
    await mongoose.connect(URI, connectionParams);
  } catch (e) {
    err = true;
  }

  if (!err) {
    const slug = params.slug;
    const blog = await Blogs.findOne({ slug });

    return {
      props: {
        blog: JSON.parse(JSON.stringify(blog)),
      },
      revalidate: 60,
    };
  }
}
