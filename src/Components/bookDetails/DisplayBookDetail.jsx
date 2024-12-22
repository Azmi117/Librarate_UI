import React, { useEffect, useState } from "react";
import { getBookById } from "../../Services/bookService";

const DisplayBookDetail = ({bookId}) => {
    const [books, setBooks] = useState(null);
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookById = async () => {
            try{
                const response = await getBookById(bookId,token);
                setBooks(response);
            }catch(error){
                console.log('Error Fetching Book :', error);
            }finally{
                setLoading(false);
            }
        };

        fetchBookById();
    }, [token]);

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <>
            <div className="flex justify-center mt-10">
                <div className="bg-[#E1D7B7] w-5/6 md:flex flex-row rounded-lg shadow-md">
                    <div>
                        <img src={books.photo} alt="" className="w-full h-64 md:h-72 lg:h-80 xl:h-96 rounded-s-md"/>
                    </div>
                    <div>
                        <div className="my-3 md:my-4 lg:my-5 xl:my-7">
                            <h1 className="ms-5 text-lg lexend-regular">Title : {books.title}</h1>
                        </div>
                        <div className="my-3 md:my-4 lg:my-5 xl:my-7">
                            <h1 className="ms-5 text-lg lexend-regular">Genre : {books.genre}</h1>
                        </div>
                        <div className="my-3 md:my-4 lg:my-5 xl:my-7">
                            <h1 className="ms-5 text-lg lexend-regular">Author : {books.author}</h1>
                        </div>
                        <div className="my-3 md:my-4 lg:my-5 xl:my-7">
                            <h1 className="ms-5 text-lg lexend-regular">Pages : {books.pages}</h1>
                        </div>
                        <div className="my-3 lg:my-5 xl:my-7">
                            <h1 className="ms-5 text-lg lexend-regular">Country : {books.country}</h1>
                        </div>
                        <div className="mt-3 mb-7 lg:mt-4 lg:mb-4 xl:mt-6 xl:mb-5">
                            <h1 className="ms-5 text-lg lexend-regular">Upload By : {books.upload_by}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayBookDetail;