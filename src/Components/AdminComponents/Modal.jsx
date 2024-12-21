import React, { useEffect, useState } from "react";

const Modal = ({ isOPen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOPen) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            // Delay untuk memastikan animasi selesai sebelum menghapus modal dari DOM
            setIsAnimating(false);
            const timer = setTimeout(() => setIsVisible(false), 300); // 300ms sesuai dengan durasi animasi
            return () => clearTimeout(timer);
        }
    }, [isOPen]);

    if (!isVisible) return null;

    return (
        <>
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2 transition-opacity duration-300 ${
                    isAnimating ? "opacity-100" : "opacity-0"
                }`}
            >
                <div
                    className={`bg-[#E1D7B7] rounded-lg shadow-md p-6 w-full max-w-md transition-transform duration-300 ${
                        isAnimating ? "scale-100" : "scale-95"
                    }`}
                >
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="w-6 h-6 text-white text-lg flex items-center justify-center -mt-[0.8rem] -me-[0.9rem] text-gray-500 pb-1 rounded-full hover:text-gray-700 bg-red-500"
                        >
                            x
                        </button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
};

export default Modal;
