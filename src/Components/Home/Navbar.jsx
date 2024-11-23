import { useState } from 'react';
import { Link } from 'react-router-dom';
import SmallBox from './smallBox';

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallBox, setIsSmallBox] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    setIsSmallBox(!isSmallBox);
  };

  return (
    <>
      <nav className="w-screen bg-[#7C93C3] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'https://www.google.com/'}>
            <img
              src="./logo.png"
              width="90px"
              alt="Flowbite Logo"
            />
          </Link>

          <div className="hidden md:flex flex items-center">
            <input type="text" className="lg:w-[20rem] md:w-[12rem] h-9 rounded-l-lg border border-slate-600 bg-[#D9D9D9] ps-1" placeholder="Enter title book here" />
            <select name="" id="" className="h-9 border border-slate-600 bg-[#D9D9D9]">
              <option value="" disabled selected>Country</option>
              <option value="option1">Indonesia</option>
              <option value="option2">Korea</option>
              <option value="option3">Japan</option>
            </select>
            <button className="h-9 border border-slate-600 p-2 rounded-r-lg bg-[#EAD8C0] hover:bg-gray-500">
              <img src="https://www.svgrepo.com/show/521826/search.svg" alt="" width="20px" />
            </button>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline outline-2 focus:ring-2 focus:ring-gray-600 bg-gray-500"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-800 md:bg-[#7C93C3] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <button
                  onClick={handleHomeClick}
                  type="button"
                  className="hidden md:block py-2 px-3 text-white rounded"
                  aria-current="page"
                >
                  <img src="https://www.svgrepo.com/show/487693/profile-2.svg" alt="" width="25px" />
                </button>
                  {isSmallBox && <SmallBox />}
              </li>
              <li className="md:hidden">
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                >
                  Login
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 lg:hover:bg-inherit lg:hover:text-slate-950"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 lg:hover:bg-inherit lg:hover:text-slate-950"
                >
                  Contact
                </Link>
              </li>
              <li className="px-2 md:hidden">
                <div className="flex">
                  <img src="https://www.svgrepo.com/show/532551/search-alt-1.svg" alt="" className="w-7 h-7 bg-white border border-slate-950 rounded-l-md p-1" />
                  <input type="text" className="w-full rounded-r-md h-7 px-1 border border-slate-950" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
