import { useEffect, useState } from "react";
import Dropzone from "../Components/Profile/Dropzone";
import { getUserByID, updateUser } from "../Services/userService";
import { jwtDecode } from "jwt-decode";
import useAuthStore from "../store/store";

const Profile = () => {
    const { isLoggedIn } = useAuthStore();
    const [userId, setUserId] = useState(null);
    const [userPhoto, setUserPhoto] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState(null);

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

        if(isLoggedIn){
            fetchUser();
        }
    }, [isLoggedIn]);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        if (photo) {
          formData.append("photo", photo);
        }
      
        try {
          const token = localStorage.getItem("token");
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;
      
          await updateUser(formData, token);
      
          const updatedUserData = await getUserByID(userId, token);
          if (updatedUserData) {
            setUserPhoto(updatedUserData);
          }
      
          alert("Profile updated successfully!");
          window.location.reload();
        } catch (error) {
          console.error("Error updating user", error);
          alert("Failed to update profile. Please try again.");
        }
      };

      const handleFileUpload = (file) => {
        setPhoto(file);
      };
      

    return(
        <>
            <div className="w-screen min-h-screen bg-[#1F509A] flex items-center justify-center">
                <div className="w-72 rounded-md shadow-md bg-[#608BC1]">
                    <div className="">
                        <img src={userPhoto || "https://plus.unsplash.com/premium_photo-1661414561433-cfeffc4430da?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" className="w-32 h-32 rounded-full -mt-[5rem] lg:-mt-[3.5rem] xl:-mt-[5rem] ms-[4.8rem]"/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full flex flex-col mt-3">
                            <label htmlFor="username" className="ms-6 text-white">Username</label>
                            <input 
                                type="text" 
                                name="" 
                                id="username" 
                                className="w-5/6 mx-auto rounded-md h-7 px-1"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="w-full flex flex-col mt-3">
                            <label htmlFor="email" className="ms-6 text-white">Email</label>
                            <input 
                                type="email" 
                                name="" 
                                id="email" 
                                className="w-5/6 mx-auto rounded-md h-7 px-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="w-full flex flex-col mt-3">
                            <label htmlFor="email" className="ms-6 text-white">Photo</label>
                            <Dropzone onFileUpload={handleFileUpload}/>
                        </div>
                        <div className="flex justify-center my-5">
                            <button className="bg-[#22177A] w-5/6 h-7 rounded-md text-white hover:bg-[#C6E7FF] hover:text-slate-950">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile;