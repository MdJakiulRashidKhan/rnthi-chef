import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="container mx-auto ">
      <div className="navbar bg-[#F2E498] py-5 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/program">Program</Link>
              </li>
              <li>
                <Link to="/faculty">Our Faculty</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/certificate">Verify Certificate</Link>
              </li>
            </ul>
          </div>
          <img className="w-14" src="images/logo.png" alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/program">Program</Link>
            </li>
            <li>
              <Link to="/faculty">Our Faculty</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/certificate">Verify Certificate</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-red-800 px-8 py-2 text-white">
            <div className="bg-orange-400 p-2">
              <FaPhoneAlt />
            </div>
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
