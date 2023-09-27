import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearch, useDarkTheme, useMenu } from "@/hooks";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context-api";
import {
  LogOut,
  Moon,
  Sun,
  Search,
  Github,
  Home,
  UserCog,
  AlignRight,
} from "lucide-react";
import Nav from "./Nav";

function Header() {
  const options = useSearch();
  const { showSearchBar, toggleSearchBar, handleSearch } = options;
  const { darkTheme, toggleDarkTheme } = useDarkTheme();
  const { openMenu, toggleMenu } = useMenu();
  const { isLoggedIn } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <>
      <header className="">
        <div className="header">
          <div className="flex justify-between text-white">
            <div className="text-xl font-extrabold text-black dark:text-gray-100">
              <Link href="/">Tech-Canvas</Link>
            </div>
            <div className="flex gap-2 text-black dark:text-white">
              {isLoggedIn && (
                <>
                  <button className="" type="button">
                    <Link href="/admin/dashboard">
                      <UserCog />
                    </Link>
                  </button>
                  <button onClick={handleLogout} className="" type="button">
                    <LogOut />
                  </button>
                </>
              )}
              {!isLoggedIn && (
                <Link
                  href="/admin/login"
                  className="border-[1px] border-purple-600 text-purple-600 dark:border-purple-300 dark:text-purple-300 rounded px-2 "
                  type="button"
                >
                  Login
                </Link>
              )}
              <button onClick={toggleSearchBar} type="button">
                <Search />
              </button>
              <button onClick={toggleDarkTheme} type="button">
                {darkTheme ? <Sun /> : <Moon />}
              </button>
              {/* Menu Icon */}
              <button onClick={toggleMenu} type="button">
                <AlignRight />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className={`${showSearchBar ? "visible" : "hidden"} my-4`}>
            <form onSubmit={handleSearch}>
              <input
                className="text-gray-600 w-full px-2 py-2 rounded outline-0 bg-white border-[1px] border-gray-300"
                placeholder="Type something..."
                type="search"
                {...options}
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  className="border-[1px] border-black dark:border-white dark:text-white text-black rounded px-2 py-1"
                  type="button"
                  onClick={toggleSearchBar}
                >
                  Cancel
                </button>
                <button
                  className="bg-black dark:bg-white text-white dark:text-black rounded px-2 py-1"
                  type="submit"
                  // onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Nav */}
        {openMenu && <Nav close={toggleMenu} />}
      </header>
    </>
  );
}

export default Header;
