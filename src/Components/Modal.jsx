import React from "react";

const Modal = ({ isOPen, onClose, children }) => {
    if(!isOPen) return null;

    return(
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2">
                <div className="bg-[#E1D7B7] rounded-lg shadow-md p-6 w-full max-w-md overflow-y-auto">
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="w-6 h-6 text-white text-lg flex items-center justify-center -mt-[0.8rem] -me-[0.9rem] text-gray-500 pb-1 rounded-full hover:text-gray-700 bg-red-500">
                            x
                        </button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Modal;