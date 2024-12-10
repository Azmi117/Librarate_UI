import { Link } from "react-router-dom";
import useAuthStore from "../../store/store";

const SmallBox = () => {
    const {isLoggedIn, logout} = useAuthStore();

    const handleLogOut = () => {
        logout();
        navigate("/login");
    }

    return(
        <>
            <div className="hidden md:block container relative flex justify-end z-50 absolute bottom-2">
                    {isLoggedIn ? 
                    (
                        <>
                            <div className="flex flex-col absolute md:-right-[0.4rem] lg:-right-[2.3rem] bg-white">
                                <Link to={'/profile'} className="ps-1.5 py-0.5 hover:bg-gray-500 hover:text-white shadow-md drop-shadow-md">Profile</Link>
                                <button onClick={handleLogOut} className="p-0.5 px-1 hover:bg-gray-500 hover:text-white">Logout</button> 
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col absolute md:-right-[0.4rem] lg:-right-[0.5rem] bg-white">
                                <Link to={'/login'} className="ps-3 py-0.5 hover:bg-gray-500 hover:text-white shadow-md drop-shadow-md">Login</Link>
                                <Link to={'/register'} className="p-0.5 px-1 hover:bg-gray-500 hover:text-white">Register</Link>
                            </div>
                        </>
                    )}
            </div>
        </>
    )
}

export default SmallBox;