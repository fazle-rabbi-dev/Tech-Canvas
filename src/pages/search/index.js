import { useState, useEffect } from "react";
import { BlogCard, Pagination, Loading, DynamicMetadata } from "@/components";
import Head from "next/head"

function SearchPage({blogs,query}) {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if(blogs && query){
      setLoading(false)
    }
    
  },[]);
  
  if(loading){
    return <Loading />
  }
  
  return (
    <section className="">
      <Head>
        <title>Search | {query}</title>
      </Head>
      {
        blogs.length > 0 && (
            <DynamicMetadata blog={blogs[0]} />
          )
      }
      <h2 className="text-xl text-center">
        📢 Results for the query: {query}
        <p className="text-sm text-gray-500 dark:text-gray-200">
          Total {blogs.length} post found
        </p>
      </h2>
      {/* Blog Card */}
      <section className="mt-5">
        <h2 className="font-satoshi-medium font-extrabold text-2xl pb-2 mb-2 border-b-2 border-gray-800">
          📦 Posts
        </h2>
        {
          blogs?.length === 0 && (
              <div className="flex justify-center items-center">
                <span className="text-purple-600 dark:text-purple-200 text-sm">Oops! no blog post found</span>
              </div>
            )
        }
        {
          blogs?.map(blog => <BlogCard key={blog._id} blog={blog} />)
        }
      </section>
      

    </section>
  );
}

export default SearchPage;

export async function getServerSideProps(context) {
  const query = context.query.q
  const res = await fetch(`${process.env.PUBLIC_API_ROOT}/search?q=${query}`);
  const {blogs} = await res.json();
  

  return {
    props: {
      blogs,
      query
    },
  };
}
