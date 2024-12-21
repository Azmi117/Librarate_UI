import { Link } from "react-router-dom";
import useAuthStore from "../../store/store";
import { useEffect, useState } from "react";
import { getUserByID } from "../../Services/userService";
import { jwtDecode } from "jwt-decode";

const SmallBox = () => {
    const {isLoggedIn, logout} = useAuthStore();
    const [userData, setUserData] = useState(null);

    const token = localStorage.getItem('token');
    let userId = null;

    if(token){
        try{
            userId = jwtDecode(token);
        }catch(error){
            console.error("Error decoding token: ", error);
        }
    }

    useEffect(() => {
        if(userId){
            const fetchUser = async () => {
                try{
                    const response = await getUserByID(userId.id, token);
                    setUserData(response);
                }catch(error){
                    console.log('Error fetching user : ', error);
                }
            };
    
            fetchUser();
        }
    }, [isLoggedIn]);

    const handleLogOut = () => {
        logout();
        setUserData(null); 
    };

    return(
        <>
            <div className="hidden md:block container relative flex justify-end z-50 absolute bottom-2">
                    {isLoggedIn ? 
                    (
                        <>
                            <div className="w-20 flex flex-col absolute md:-right-[2rem] lg:-right-[2.8rem] bg-white shadow-md flex justify-center rounded-md">
                                <Link to={'/profile'} className="w-full flex justify-center py-0.5 hover:bg-gray-500 hover:text-white drop-shadow-md mx-auto rounded-t-md">Profile</Link>
                                {userData?.role === 'Admin' && (
                                    <Link
                                        to={'/admin/activebook'}
                                        className="w-full py- hover:bg-gray-500 hover:text-white flex flex-col"
                                    >
                                        <h1 className="mx-auto">Admin</h1>
                                        <h1 className="mx-auto">Panel</h1>
                                    </Link>
                                )}
                                <button onClick={handleLogOut} className="p-0.5 px-1 hover:bg-gray-500 hover:text-white rounded-b-md">Logout</button> 
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col absolute md:-right-[0.4rem] lg:-right-[0.5rem] bg-white rounded-md">
                                <Link to={'/login'} className="ps-3 py-0.5 hover:bg-gray-500 hover:text-white rounded-t-md">Login</Link>
                                <Link to={'/register'} className="p-0.5 px-1 hover:bg-gray-500 hover:text-white rounded-b-md">Register</Link>
                            </div>
                        </>
                    )}
            </div>
        </>
    )
}

export default SmallBox;