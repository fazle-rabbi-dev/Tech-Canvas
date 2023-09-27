import Link from 'next/link';
import { formatDate } from "@/utils"
import { Trash } from 'lucide-react';

function List({blog}) {
  return (
    <li className="relative p-2 rounded rounded bg-gray-800 dark:bg-gray-700 text-white flex justify-between items-center mb-4 gap-2">
      <div className="flex flex-col gap-2">
        <span>
          { blog.title }
        </span>
        <span className="text-sm text-gray-300">
          {formatDate(blog.date)}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-rose-600 rounded px-2 py-1 text-white"
          type="button"
        >
          <Link href={`/admin/dashboard/delete-post?slug=${blog.slug}`}>
            
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            </span>
          </Link>
        </button>
        <button
          className="bg-purple-600 rounded px-2 py-1 text-white"
          type="button"
        >
          <Link href={`/admin/dashboard/edit-post?slug=${blog.slug}`}>
            
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
            </span>
          </Link>
        </button>
      </div>
    </li>
  );
}

export default List;
