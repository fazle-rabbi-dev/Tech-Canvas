import React from "react";
import Link from "next/link";

function Tags({ tag }) {
  return (
    <Link href={`/search?q=${tag}`}>
      <button
        className="bg-gray-50 dark:bg-gray-800 shadow rounded rounded-xl text-sm px-4 py-1"
        type="button"
      >
        {tag}
      </button>
    </Link>
  );
}

export default Tags;
