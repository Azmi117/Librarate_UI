import { useState } from "react";
import Modal from "./Modal";

const CardUserAccount = ({user}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return(
        <>
            <div className="w-40 h-60 bg-[#E1D7B7] rounded-lg shadow-md">
                <img src={user.photo || "https://plus.unsplash.com/premium_photo-1681488159219-e0f0f2542424?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" className="w-full h-40 border-b-2 border-slate-950 rounded-t-lg"/>
                <div className="flex flex-col items-center h-16">
                    <h1 className="mt-2">{user.username}</h1>
                    <button
                        onClick={() => setIsModalOpen(true)} 
                        className="rounded-2xl bg-[#6F8BD2] px-2 transition duration-300 ease-in-out hover:scale-105 text-white hover:text-gray-800 mt-2">show Details</button>
                </div>
            </div>

            <Modal onClose={() => setIsModalOpen(false)} isOPen={isModalOpen}>
                <div className="flex justify-center">
                    <h1 className="text-xl font-bold">User Details</h1>
                </div>
                <div className="flex justify-center mt-4">
                    <img src={user.photo || "https://plus.unsplash.com/premium_photo-1681488159219-e0f0f2542424?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" className="w-56 h-56 rounded-full shadow-md"/>
                </div>
                <div className="flex justify-center mt-4">
                    <h1>Username: {user.username}</h1>
                </div>
                <div className="flex justify-center mt-4">
                    <h1>Email: {user.email}</h1>
                </div>
                <div className="flex justify-center mt-4">
                    <h1>Role: {user.role}</h1>
                </div>
            </Modal>
        </>
    )
}

export default CardUserAccount;