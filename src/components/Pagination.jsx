import Link from 'next/link';

function Pagination({shouldNext, currentPage}) {
  return (
    <ul className="list-none flex justify-between items-center gap-2">
      <Link href={`/page/${currentPage > 1 && currentPage - 1}`}>
        {/*<li className="rounded rounded-full py-2 px-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white"><span className="font-extrabold">&larr;</span> Previous</li>*/}
        <button disabled={currentPage < 2} className="pagination_btn"><span className="font-extrabold text-md">&larr;</span> Previous</button>
      </Link>
      <Link href={`/page/${currentPage+1}`}>
        <button disabled={!shouldNext} className="pagination_btn">Next <span className="font-extrabold text-md">&rarr;</span></button>
      </Link>
    </ul>
  );
}

export default Pagination;
