const mongoose = require("mongoose");
const { Blogs } = require("@/mongoose");
import { BlogCard, Pagination, Tag, Loading } from "@/components";
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
      <section className="text-center">
        <h1 className="my-4 md:my-6 font-satoshi-medium text-4xl font-extrabold bg-gradient-to-b from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Explore The World Of Technology
        </h1>
        <div className="md:flex md:justify-center md:items-center md:flex-row-reverse">
          <div className="md:w-[40%]">
            <Image
              className="w-[100%]"
              src="/hero.svg"
              width={1000}
              height={600}
            />
          </div>
          <p className="md:w-[60%] leading-7 my-2 font-supreme-regular">
            My name is <span>Fazle Rabbi.</span>Im a mern stack developer.Here's i
            write blog about technology. 🚀 Embrace the Future with Tech! Explore
            the latest innovations, trends, and gadgets that are shaping our
            world. From AI to IoT, we've got you covered. Let's embark on a
            journey of discovery together!
          </p>
        </div>
      </section>

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
