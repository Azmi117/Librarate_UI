import { Link } from "react-router-dom";

const SmallBox = () => {
    return(
        <>
            <div className="hidden md:block container relative flex justify-end z-50 absolute bottom-2">
                <div className="flex flex-col absolute md:-right-[0.4rem] lg:-right-[0.5rem] bg-white">
                    <Link to={'/login'} className="ps-3 py-0.5 hover:bg-gray-500 hover:text-white shadow-md drop-shadow-md">Login</Link>
                    <Link to={'/register'} className="p-0.5 px-1 hover:bg-gray-500 hover:text-white">Register</Link>
                </div>
            </div>
        </>
    )
}

export default SmallBox;