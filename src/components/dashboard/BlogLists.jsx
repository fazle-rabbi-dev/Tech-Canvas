import Link from "next/link";
import { useState, useEffect } from "react";
import { Loading } from "@/components";
import { showToast } from "@/utils"
import List from "./List"

function BlogLists() {
  const [loading, setLoading] = useState(true);
  const [reservedBlogs, setReservedBlogs] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [filterText, setFilterText] = useState("")
  
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(`/api/public/get-all-post`)
        const response = await res.json();
        if(response.blogsData){
          response.blogsData.data.reverse()
          setReservedBlogs(response.blogsData)
          setBlogs(response.blogsData)
          setLoading(false)
        }else{
          setLoading(false)
        }
      } catch (e) {
        showToast(e.message)
        setLoading(false)
      }
    };
    
    getBlogs()
  }, []);
  
  const handleFilter = (e) => {
    const value = e.target.value
    setFilterText(value)
    
    const filteredBlogs = reservedBlogs.data.filter(blog => blog.title.toLowerCase().includes(value.toLowerCase()))
    setBlogs({...reservedBlogs, data: filteredBlogs})
  }
  
  return (
    <div className="my-6">
      <h2 className="text-xl">All Posts</h2>
      <div className="max-h[50vh] overflow-auto p-4 bg-white dark:bg-gray-800 mt-2 border-2 dark:border-0 rounded">
        <input
          className="border-[1px] rounded w-full outline-0 px-2 py-1 dark:text-gray-600"
          placeholder="Search"
          type="text"
          value={filterText}
          onChange={handleFilter}
        />
        <div className="my-4">
          <Link href="/admin/dashboard/add-post">
            <button
              className="border-[1px] border-purple-500 text-purple-500 dark:border-purple-300 dark:text-purple-300 w-full text-sm rounded font-satoshi-medium px-2 py-2 active:bg-purple-600 active:text-white active:border-white"
              type="button"
            >
              Add New Post
            </button>
          </Link>
        </div>
        <div className="h-[50vh] overflow-scroll">
          <ol>
            {
              blogs?.data?.map(blog => <List key={blog._id} blog={blog} />)
            }
            {
              loading && <Loading />
            }
            {
              blogs?.data.length === 0 && (
                  <div className="flex justify-center items-center text-purple-300">
                    <span>Oops! no such blog found</span>
                  </div>
                )
            }
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BlogLists;
