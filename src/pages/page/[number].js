const mongoose = require("mongoose");
const { Blogs } = require("@/mongoose");
import { useState, useEffect } from "react";
import {
  Pagination,
  BlogCard,
  Loading,
  Tag,
  DynamicMetadata,
} from "@/components";
import { useRouter } from "next/router";
import Error from "next/error";

function Page({ allBlogs, shouldNext, tags }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (allBlogs && tags) {
      setLoading(false);
    }
  }, [allBlogs]);

  if (loading) {
    return <Loading />;
  }

  if (allBlogs?.length === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <section className="">
      {allBlogs.length > 0 && <DynamicMetadata data={allBlogs[0]} />}
      <h2 className="font-clash-display-medium text-xl pb-2 mb-2 border-b-2 border-gray-800">
        📦 Posts
      </h2>
      {allBlogs?.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
      {/* Pagination */}
      <section className="my-4">
        <Pagination
          shouldNext={shouldNext}
          currentPage={parseInt(router?.query?.number)}
        />
      </section>

      {/* Tags */}
      <section className="my-16">
        <h2 className="font-satoshi-medium font-extrabold text-2xl pb-2 mb-2 border-b-[.5px] border-gray-300 mb-4">
          🧵 Tags
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Page;

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

    let totalPages = blogs.length;
    /* If not total blogs are less then or equal 6 */
    if (!(blogs.length <= 6)) {
      totalPages = blogs.length / 6;
      totalPages = Math.ceil(totalPages);
    }

    const paths = Array(totalPages)
      .fill()
      .map((_, i) => {
        return {
          params: {
            number: (i + 2).toString(),
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
    const currentPage = params.number;
    const postPerPage = 6;
    const offset = (currentPage - 1) * postPerPage;
    
    /* Get Blogs */
    let blogs = await Blogs.find();
    const allBlogs = JSON.parse(JSON.stringify(blogs));
    // .skip(offset)
    // .limit(limit);

    let shouldNext = false;
    if (blogs.length > offset + 6) {
      shouldNext = true;
    }

    blogs.reverse();
    blogs = blogs.slice(offset, offset + 6);
    
    /* Get All Tags */
    let tags = [];
    blogs.forEach((blog) => {
      blog.tags.forEach((tag) => {
        tags.push(tag);
      });
    });
    tags = new Set(tags);
    tags = Array.from(tags);
    
    blogs = JSON.parse(JSON.stringify(blogs));
    tags = JSON.parse(JSON.stringify(tags));
    
    return {
      props: {
        allBlogs: blogs,
        shouldNext,
        tags
      },
      revalidate: 60,
    };
  }
}
