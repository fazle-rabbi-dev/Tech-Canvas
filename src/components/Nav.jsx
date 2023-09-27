import React from 'react'
import Link from 'next/link';
import { X } from "lucide-react"

function Nav({close}) {
  return (
    <nav className="dark:bg-[rgba(0,0,0,.015)] backdrop-blur fixed z-20 top-0 left-0 bottom-0 w-[100vw] h-[100vh]">
      <div className="rounded rounded-md bg-white dark:bg-gray-900 dark:text-white shadow shadow-2xl dark:shadow-[0] text-black absolute top-5 right-4 h-72 w-[90vw] md:right-10 md:w-[30vw] dark:border-[.5px] ">
        <button onClick={close} className="absolute right-4 top-4" type="button">
          <X />
        </button>
        <div className="px-2 font-bold h-[100%] flex flex-col justify-center gap-2">
          <Link className="py-2 px-4 hover:bg-gray-50 hover:dark:bg-gray-800 rounded" onClick={close} href="/">
            Home
          </Link>
          <Link className="py-2 px-4 hover:bg-gray-50 hover:dark:bg-gray-800 rounded" onClick={close} href="/about">
            About
          </Link>
          <Link className="py-2 px-4 hover:bg-gray-50 hover:dark:bg-gray-800 rounded" onClick={close} href="/contact">
            Contact
          </Link>
          <Link className="py-2 px-4 hover:bg-gray-50 hover:dark:bg-gray-800 rounded" onClick={close} href="/privacy-policy">
            Privacy policy
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
