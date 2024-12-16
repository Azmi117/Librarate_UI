import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SmallBox from './Home/smallBox';
import useAuthStore from '../store/store';
import { jwtDecode } from 'jwt-decode';
import { getUserByID } from '../Services/userService';
import BreadCrumbs from './bookDetails/breadCrumbs';

const Navbar = ({ children, onSearch, onSelectCountry }) => {
  const { validateToken, isLoggedIn, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallBox, setIsSmallBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [userId, setUserId] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const savedToken = localStorage.getItem('token');
      if(savedToken){
        try{
          const decodeToken = jwtDecode(savedToken);
          setUserId(decodeToken.id);
          const userData = await getUserByID(decodeToken.id, savedToken);
          setUserPhoto(userData.photo);
        }catch(error){
          console.error('Error fetching user data:', error);
        }
      }
    };

    validateToken();

    if(isLoggedIn){
      fetchUser();
    }
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    setIsSmallBox(!isSmallBox);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    if (onSearch) {
      onSearch(''); // Reset search query saat country berubah
      onSelectCountry(e.target.value); // Kirimkan country ke Home.jsx
    }
  };  

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (onSearch) {
        onSearch(searchQuery); // Panggil fungsi yang diteruskan dari Home.jsx
      } // Panggil fungsi onSearch saat tombol Enter ditekan
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchQuery); // Kirimkan nilai saat tombol diklik
    }
  };

  const handleLogOut = () => {
    logout();
  }

  return (
    <>
      <nav className="w-screen bg-[#7C93C3] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'#'}>
            <img
              src="../logo.png"
              width="90px"
              alt="Librarate Logo"
            />
          </Link>

          {location.pathname !== '/' && (
            <div className='ms-10 hidden md:block lg:ms-36'>
              <BreadCrumbs/>
            </div>
          )}

          {location.pathname === '/' && (

            <div className="hidden md:flex flex items-center">
              <input 
                type="search" 
                className="lg:w-[20rem] md:w-[12rem] h-9 rounded-l-lg border border-slate-600 bg-[#D9D9D9] ps-1" 
                placeholder="Enter title book here" 
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                />
              <select 
                  name="" 
                  id="" 
                  className="h-9 border border-slate-600 bg-[#D9D9D9]"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                <option value="" disabled>Country</option>
                <option value="">None</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Korea">Korea</option>
                <option value="Japan">Japan</option>
              </select>
              <button 
                className="h-9 border border-slate-600 p-2 rounded-r-lg bg-[#EAD8C0] hover:bg-gray-500"
                onClick={handleSearchClick}
              >
                <img src="https://www.svgrepo.com/show/521826/search.svg" alt="" width="20px" />
              </button>
            </div>
          )}

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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-800 md:bg-[#7C93C3] md:flex-row md:space-x-3 lg:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <button
                  onClick={handleHomeClick}
                  type="button"
                  className="hidden md:block py-2 px-3 text-white rounded"
                  aria-current="page"
                >
                  {isLoggedIn ? (
                    <>
                    <div className='-me-[38px]'>
                      <img src={userPhoto || "https://plus.unsplash.com/premium_photo-1661414561433-cfeffc4430da?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" className='md:w-9 h-9 lg:w-10 h-10 rounded-full'/>
                    </div>
                    </>
                  ):(
                    <>
                      <img src="https://www.svgrepo.com/show/513868/user.svg" alt="" className='w-7'/>
                    </>
                  )}
                </button>
                  {isSmallBox && <SmallBox />}
              </li>
              {isLoggedIn ? (
                <>
                  <div className='flex justify-center'>
                    <img src={userPhoto || "https://plus.unsplash.com/premium_photo-1661414561433-cfeffc4430da?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" className='rounded-full w-20 h-20 md:hidden'/>
                  </div>
                  <li className="md:hidden">
                  <Link
                    to={'/profile'}
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                  >
                    Edit Profile
                  </Link>
                </li>
                <li className="md:hidden">
                  <button
                    onClick={handleLogOut} 
                    className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </li>
                </>
              ) : (
                <>
                  <li className="md:hidden">
                    <Link
                      to={'/login'}
                      className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="md:hidden">
                    <Link
                      to={'/register'}
                      className="block py-2 px-3 text-white rounded hover:bg-gray-700"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
              <li className='flex items-center'>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white md:ms-2 rounded hover:bg-gray-700 lg:hover:bg-inherit lg:hover:text-slate-950 flex"
                >
                  About
                </Link>
              </li>
              <li className='flex items-center'>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 lg:hover:bg-inherit lg:hover:text-slate-950"
                >
                  Contact
                </Link>
              </li>
              {location.pathname === '/' && (
                <>
                  <li className='px-2 md:hidden'>
                    <select 
                      name="" 
                      id="" 
                      className="w-full border border-slate-600 bg-[#D9D9D9] mt-2 rounded"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                    >
                    <option value="" disabled>Country</option>
                    <option value="">None</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Korea">Korea</option>
                    <option value="Japan">Japan</option>
                  </select>
                  </li>
                  <li className="px-2 md:hidden">
                    <div className="flex mt-2">
                      <img src="https://www.svgrepo.com/show/532551/search-alt-1.svg" alt="" className="w-7 h-7 bg-white border border-slate-950 rounded-l-md p-1" />
                      <input 
                        type="text" 
                        className="w-full rounded-r-md h-7 px-1 border border-slate-950" 
                        placeholder='Enter title here..'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
