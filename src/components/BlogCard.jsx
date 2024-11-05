import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from "@/utils"

function BlogCard({blog}) {
  const title = blog.title.charAt(0).toUpperCase()+blog.title.slice(1,blog.title.length);
  
  return (
    <article className="mb-8 bg-gray-50 dark:bg-gray-800 rounded rounded-md shadow">
      <Image 
        className="rounded w-full h-[200px] object-cover" 
        src={blog.thumbnail?.startsWith("http") ? blog.thumbnail : ""}
        width={1000}
        height={200}
        alt="Blog Thumbnail"
      />
      <div className="p-4">
        <div className="flex gap-2 flex-wrap">
          {
            blog.tags?.map(tag => (
              <Link href={`/search?q=${tag}`} className="text-gray-600 dark:text-gray-200">
                <button type="button">
                  #{tag}
                </button>
              </Link>
            ))
          }
        </div>
        <h2 className="text-xl tracking-wide leading-7 font-satoshi-medium my-2">
          {title}
        </h2>
        <div className="text-sm text-gray-600 dark:text-gray-500">
          <span>{formatDate(blog.date)}</span>
        </div>
        <p className="mt-2 font-supreme-regular">
          {blog.desc?.slice(0,200)+"..." || "Eiusmod aute anim mollit elit ut ex dolor eiusmod labore" }
        </p>
        <Link href={`/blog/${blog.slug}`}>
          <button className="mt-2 py-1 rounded font-supreme-regular bg-purple-600 text-white text-sm px-2 py-2" type="button">
            Read More
          </button>
        </Link>
      </div>
    </article>
  )
}

export default BlogCard



export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let blogsData = await response.json();
  blogsData = blogsData.length > 6 && blogsData.slice(0,6)

  return {
    props: {
      blogsData
    },
  };
}

