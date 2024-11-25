import Dropzone from "../Components/Profile/Dropzone";

const Profile = () => {
    return(
        <>
            <div className="w-screen min-h-screen bg-[#1F509A] flex items-center justify-center">
                <div className="w-72 rounded-md shadow-md bg-[#608BC1]">
                    <div className="">
                        <img src="https://plus.unsplash.com/premium_photo-1661414561433-cfeffc4430da?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-32 h-32 rounded-full -mt-[5rem] lg:-mt-[3.5rem] xl:-mt-[5rem] ms-[4.8rem]"/>
                    </div>
                    <div className="w-full flex flex-col mt-3">
                        <label htmlFor="username" className="ms-6 text-white">Username</label>
                        <input type="text" name="" id="username" className="w-5/6 mx-auto rounded-md h-7 px-1"/>
                    </div>
                    <div className="w-full flex flex-col mt-3">
                        <label htmlFor="email" className="ms-6 text-white">Email</label>
                        <input type="email" name="" id="email" className="w-5/6 mx-auto rounded-md h-7 px-1"/>
                    </div>
                    <div className="w-full flex flex-col mt-3">
                        <label htmlFor="email" className="ms-6 text-white">Photo</label>
                        <Dropzone/>
                    </div>
                    <div className="flex justify-center my-5">
                        <button className="bg-[#22177A] w-5/6 h-7 rounded-md text-white hover:bg-[#C6E7FF] hover:text-slate-950">Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;