import React, { useState } from "react";
import Modal from "../Modal";
import StarRating from "./Rating";
import { createReview } from "../../Services/reviewServices";
import { toast } from "react-toastify";

const AddComment = ({ bookId, token, onNewComment }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            bookId: parseInt(bookId),
            comment,
            rating: rating.toString()
        };

        try{
            const newReview = await createReview(reviewData, token);
            onNewComment(newReview);
            setComment('');
            setRating(1);
            toast.success('Success Create Comment');
            setModalOpen(false);
        }catch(error){
            toast.error('Failed Create Comment ☹');
        }
    }

    return(
        <>
            <div className="w-5/6 my-2 mx-auto flex justify-end">
                <button 
                    onClick={() => setModalOpen(true)}
                    className="pe-1 hover:text-blue-400 poppins-semibold"
                >
                    Add Comment
                </button>
            </div>

            <Modal isOPen={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="flex justify-center font-bold text-lg">
                    <h1 className="poppins-semibold">Create Comment</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <h1 className="poppins-semibold">Comment:</h1>
                        <textarea 
                            name="" 
                            id="" 
                            cols="30" 
                            rows="7"
                            className="w-full rounded-md mt-1 p-1"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <div className="mt-2">
                        <StarRating
                            rating={rating}
                            editable={true}
                            onRatingChange={setRating}
                        />
                    </div>
                    <div className="mt-8 mb-2">
                        <button 
                            type="submit"
                            className="w-full bg-[#667BC6] text-white py-0.5 rounded-xl poppins-semibold transition duration-300 ease-in-out hover:scale-105"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default AddComment;