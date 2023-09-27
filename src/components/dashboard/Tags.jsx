import Link from "next/link";
import { useState, useEffect } from "react";
import { Loading } from "@/components";
import { showToast } from "@/utils"

function Tags() {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await fetch(`/api/public/get-tags`)
        const response = await res.json();
        setTags(response.tags)
        setLoading(false)
      }
      catch(e){
        showToast(e.message)
        setLoading(false)
      }
    };
    
    getTags()
  }, []);
  
  
  return (
    <div className="my-6">
      <h2 className="text-xl">All Tags </h2>
      <div className="max-h[50vh] overflow-auto p-4 bg-white dark:bg-gray-800 mt-2 border-2 dark:border-0 rounded">
        {
          loading && <Loading />
        }
        <div className="mt-2 flex gap-2 flex-wrap">
          {
            tags?.map(tag => (
                <Link key={tag} href={`/search?q=${tag}`}>
                  <button className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded" type="button">
                    { tag }
                  </button>
                </Link>
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default Tags;
