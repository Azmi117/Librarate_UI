import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <div className="w-full h-[8rem] bg-[#667BC6] flex justify-center items-center md:justify-between">
                <img src="/logo.png" alt="" className="hidden md:block w-[12.5rem] md:ms-5"/>
                <div className="lg:ms-[-40px] xl:ms-[-90px]">
                    <div className="flex flex-row justify-center ms-8 md:ms-[-5rem] lg:ms-0 h-11">
                        <Link to={'/'} className="rounded-full overflow-hidden inline-block">
                            <img src="https://www.svgrepo.com/show/506463/discord.svg" alt="" width={50} className="block"/>
                        </Link>
                        <Link to={'/'} className="rounded-full overflow-hidden inline-block mx-5 mt-1">
                            <img src="https://www.svgrepo.com/show/353162/instagram-with-circle.svg" alt="" width={38}/>
                        </Link>
                        <Link to={'/'} className="rounded-full h-11">
                            <img src="https://www.svgrepo.com/show/503359/github.svg" alt="" width={45}/>
                        </Link>
                    </div>
                    <p className="text-xs ms-5 mt-4 md:mt-0 md:ms-[-4rem] lg:ms-0 md:text-sm lg:mt-2">© 2024 Semua Hak Dilindungi Undang-Undang, Librarate</p>
                </div>
                <div className="hidden md:flex flex-col me-5">
                    <Link to={'/about'} className="mx-auto font-bold hover:text-white">About</Link>
                    <Link to={'/contact'} className="font-bold mt-2 hover:text-white">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;