import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  const isActive = (path) => location.pathname.startsWith(path);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Button to toggle sidebar (visible only on small screens) */}
      <button
        onClick={toggleSidebar}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
        aria-label="Toggle sidebar"
      >
        <span className="sr-only">
          {isOpen ? "Close sidebar" : "Open sidebar"}
        </span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d={
              isOpen
                ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" // Icon close
                : "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" // Icon hamburger
            }
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#55679C] to-[#1E2A5E] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 lg:translate-x-0`}
      >
        <div className="flex justify-center mt-32">
          <div className="flex flex-col gap-10">
            <Link
              className={`w-56 text-xl flex justify-center archivo-black-regular ${
                isActive("/admin/activebook")
                  ? "underline underline-offset-4"
                  : "text-white hover:bg-gray-700 py-1 rounded-md"
              }`}
              to={"/admin/activebook"}
            >
              Active Book
            </Link>
            <Link
              className={`w-56 text-xl flex justify-center archivo-black-regular ${
                isActive("/wkwkwk")
                  ? "underline underline-offset-4"
                  : "text-white hover:bg-gray-700 py-1 rounded-md"
              }`}
              to={"/"}
            >
              My User Account
            </Link>
            <Link
              className={`w-56 text-xl flex justify-center archivo-black-regular ${
                isActive("/admin/useraccount")
                  ? "underline underline-offset-4"
                  : "text-white hover:bg-gray-700 py-1 rounded-md"
              }`}
              to={"/admin/useraccount"}
            >
              User Account
            </Link>
            <Link
              className={`w-56 text-xl flex justify-center archivo-black-regular ${
                isActive("/admin/insertbook")
                  ? "underline underline-offset-4"
                  : "text-white hover:bg-gray-700 py-1 rounded-md"
              }`}
              to={"/admin/insertbook"}
            >
              Insert Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
