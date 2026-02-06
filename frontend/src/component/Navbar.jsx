import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [sticky, setSticky] = useState(false);

  const element = document.documentElement;

  // 🌙 Theme handling
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // 📌 Sticky navbar
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all
      ${sticky
        ? "sticky-navbar shadow-md bg-pink-100 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out" : ""}
      `}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="navbar h-16">

          {/* LEFT */}
          <div className="navbar-start">
            {/* Mobile menu */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                ☰
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-3 shadow
                bg-white dark:bg-slate-800 rounded-box w-52"
              >
                {NavItems}
              </ul>
            </div>

            <Link to="/" className="text-xl font-bold">
              BookStore
            </Link>
          </div>

          {/* CENTER (Desktop only) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">{NavItems}</ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-2">

            {/* Search (desktop only) */}
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block input input-bordered
              dark:bg-slate-900 dark:text-white"
            />

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="btn btn-ghost text-xl"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Auth */}
            {authUser ? (
              <Logout />
            ) : (
              <>
                <button
                  className="bg-black text-white px-3 py-1 rounded-md"
                  onClick={() =>
                    document.getElementById("my_modal_2")?.showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
