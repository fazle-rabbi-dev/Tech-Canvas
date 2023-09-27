const mongoose = require("mongoose");
const { Blogs } = require("@/mongoose");
import { useState, useEffect } from "react";
import Link from "next/link";
import { Loading, Tag, DynamicMetadata } from "@/components";
import Image from "next/image";
import { showToast } from "@/utils";
import { formatDate } from "@/utils";
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
import socialLinks from "@/social-links";
import { Facebook } from "lucide-react"

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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {blog && <DynamicMetadata data={blog} />}
      <article className="article">
        <div className="">
          <h2 className="text-xl font-extrabold font-satoshi-medium">
            {blog.title}
          </h2>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {formatDate(blog.date)}
            {" • "}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Fazle Rabbi
          </span>
        </div>
        <div className="flex gap-2 my-2">
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-[#00acee] rounded rounded-full p-2 text-white text-sm"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </button>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-[#0072b1] rounded rounded-full p-2 text-white text-sm"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </button>
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-gray-500 rounded rounded-full p-2 text-white text-sm"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </button>
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-pink-600 rounded rounded-full p-2 text-white text-sm"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </button>
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-[#0866FF] rounded rounded-full p-2 text-white text-sm"
              type="button"
            >
              <Facebook />
            </button>
          </a>
        </div>
        <Image
          width={1000}
          height={200}
          className="my-4 w-full"
          src={`${
            blog.thumbnail || "https://source.unsplash.com/random/300x200"
          }`}
          alt="Thumbnail"
        />
        <p className="my-2 font-light font-supreme-regular leading-7">
          {blog?.desc}
        </p>
        <p
          className="blog_main_content font-supreme-regular"
          dangerouslySetInnerHTML={{ __html: blog.sanitizeHTML }}
        ></p>
        <div className="mt-10 mb-5 gap-2 flex flex-wrap">
          {blog?.tags?.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
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
          slug: blog.slug,
        },
      };
    });

    return {
      paths,
      fallback: true,
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
