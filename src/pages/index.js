const mongoose = require("mongoose");
const { Blogs } = require("@/mongoose");
import { Hero, BlogCard, Pagination, Tag, Loading } from "@/components";
import { useState, useEffect } from "react";
import Image from "next/image";

function Home({ blogsData, tags }) {
  const { data } = blogsData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blogsData && tags) {
      setLoading(false);
    }
  }, [blogsData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Hero />

      {/* Blog Card */}
      <section className="mt-5">
        <h2 className="font-satoshi-medium font-extrabold text-2xl pb-2 mb-2 border-b-[.5px] border-gray-300 mb-4">
          📦 Posts
        </h2>
        {data && data.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </section>

      {/* Pagination */}
      <section className="mt-10">
        <Pagination shouldNext={blogsData?.shouldNext} currentPage={1} />
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
    </>
  );
}

export default Home;

export async function getStaticProps() {
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
    /* Get Blogs */
    let blogs = await Blogs.find();
    const allBlogs = JSON.parse(JSON.stringify(blogs));
    let shouldNext = false;
    if (blogs.length > 6) {
      shouldNext = true;
    }

    blogs.reverse();
    blogs = blogs.slice(0, 6);
    
    /* Get Tags */
    let tags = [];
    allBlogs.forEach((blog) => {
      blog.tags.forEach((tag) => {
        tags.push(tag);
      });
    });
    tags = new Set(tags);
    tags = Array.from(tags);
    
    /* Convert Into Js Array */
    blogs = JSON.parse(JSON.stringify(blogs));
    tags = JSON.parse(JSON.stringify(tags));
    
    return {
      props: {
        blogsData: {
          data: blogs,
          shouldNext,
        },
        tags,
      },
      revalidate: 60,
    };
  }
}
