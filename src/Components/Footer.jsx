import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[8rem] bg-[#667BC6] flex justify-center items-center md:justify-between">
        <img
          src="/logo.png"
          alt=""
          className="hidden md:block w-[12.5rem] md:ms-5 md:w-[10rem]"
        />
        <div className="lg:ms-[-40px] xl:ms-[-90px]">
          <div className="flex flex-row justify-center ms-4 md:ms-[-5rem] lg:ms-0 h-11">
            <Link
              to={"https://www.linkedin.com/in/azmiyushari/"}
              className="w-[38px] rounded-full overflow-hidden inline-block transition duration-300 mt-1 ease-in-out hover:scale-110"
            >
              <img
                src="https://www.svgrepo.com/show/494278/linkedin-round.svg"
                alt=""
                width={50}
                className="block transition duration-300 ease-in-out mt- hover:scale-110"
              />
            </Link>
            <Link
              to={"https://www.instagram.com/azmiyushr/?locale=ko&hl=am-et"}
              className="rounded-full overflow-hidden inline-block mx-5 mt-1 transition duration-300 ease-in-out hover:scale-110"
            >
              <img
                src="https://www.svgrepo.com/show/353162/instagram-with-circle.svg"
                alt=""
                width={38}
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
            <Link
              to={"https://github.com/Azmi117"}
              className="rounded-full h-11 transition duration-300 ease-in-out hover:scale-110"
            >
              <img
                src="https://www.svgrepo.com/show/503359/github.svg"
                alt=""
                width={45}
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <p className="text-xs ms-5 mt-4 md:mt-0 md:ms-[-4rem] lg:ms-0 md:text-sm lg:mt-2">
            © 2024 Semua Hak Dilindungi Undang-Undang, Librarate
          </p>
        </div>
        <div className="hidden md:flex flex-col me-5">
          <Link
            to={"/about"}
            className="mx-auto font-bold poppins-semibold hover:text-white"
          >
            About
          </Link>
          <Link
            to="https://wa.me/6281234567890?text=Hello%20Librarate!"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold poppins-semibold mt-2 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
