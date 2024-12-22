import React, { useState } from "react";
import { updateReview, deleteReview } from "../../Services/reviewServices";
import StarRating from "./Rating";
import Modal from "../Modal";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const DisplayReviews = ({ comments, users, setComments }) => {
  const [currentComment, setCurrentComment] = useState(null);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const token = localStorage.getItem('token');
  const data_User = jwtDecode(token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentComment) {
      try {
        const params = {
          comment: currentComment.comment,
          rating: currentComment.rating,
        };

        await updateReview(currentComment.id, params, token);
        const updatedComments = comments.map((comment) =>
          comment.id === currentComment.id
            ? { ...comment, comment: currentComment.comment, rating: currentComment.rating }
            : comment
        );

        setComments(updatedComments);
        setCurrentComment(null);
        setModalEditOpen(false);
        toast.info('Success Update Comment');
      } catch (error) {
        console.error("Gagal memperbarui review:", error);
        alert("Terjadi kesalahan saat memperbarui review. Silakan coba lagi.");
      }
    }
  };

  const handleDeleteReview = async () => {
    if (commentToDelete) {
      try {
        await deleteReview(commentToDelete.id, token); // Menghapus review dengan ID
        // Mengupdate state setelah penghapusan
        const updatedComments = comments.filter((comment) => comment.id !== commentToDelete.id);
        setComments(updatedComments);

        setModalDeleteOpen(false); // Menutup modal delete
        toast.success('Success Delete Review 🎉');
      } catch (error) {
        toast.error('Failed Delete Review 😥');
      }
    }
  };

  return (
    <>
      <div className="flex flex-col">
        {comments.length === 0 ? (
          <div className="flex justify-center">
            <div className="w-5/6 bg-[#D9D9D9] h-24 rounded-lg flex items-center justify-center font-bold text-gray-600">
              There is no comment on this post
            </div>
          </div>
        ) : (
            comments.map((comment) => {
              const user = users[comment.user_id]; // Dapatkan data pengguna berdasarkan userId
              return (
                <div
                  key={comment.id} // Pastikan menggunakan key yang unik
                  className="bg-[#D9D9D9] w-5/6 h-auto rounded-lg shadow-md mx-auto my-4 p-4 flex items-start"
                >
                  <div className="w-full">
                    {user && (
                      <div className="w-full flex justify-between">
                        <div className="w-full flex flex-row items-center">
                          <img
                            src={user.photo}
                            alt={user.username}
                            className="w-12 h-12 rounded-full"
                          />
                          <h1 className="ms-2 delius-swash-caps-regular font-bold text-xl">
                            {user.username}
                          </h1>
                        </div>
                        <div className="w-4/5 flex justify-end">
                            {data_User.id === comment.user_id && (
                                <>
                                    <button className="me-10 group" onClick={() => {
                                        setModalDeleteOpen(true)
                                        setCommentToDelete(comment);
                                        }}>
                                        <img
                                        src="https://www.svgrepo.com/show/525133/trash-bin-minimalistic.svg"
                                        alt="delete-icon"
                                        className="w-7 group-hover:[filter:brightness(0)_saturate(100%)_invert(49%)_sepia(66%)_saturate(2696%)_hue-rotate(319deg)_brightness(86%)_contrast(107%);] ease-in-out hover:scale-110"
                                        />
                                    </button>
                                    <button
                                        className="group"
                                        onClick={() => {
                                        setModalEditOpen(true);
                                        setCurrentComment(comment);
                                        }}
                                    >
                                        <img
                                        src="https://www.svgrepo.com/show/523595/pen-new-square.svg"
                                        alt="edit-icon"
                                        className="w-6 group-hover:[filter:brightness(0)_saturate(100%)_invert(43%)_sepia(60%)_saturate(3502%)_hue-rotate(220deg)_brightness(97%)_contrast(88%);] ease-in-out hover:scale-110"
                                        />
                                    </button>
                                </>
                            )}
                        </div>
                      </div>
                    )}
                    <div className="flex flex-row">
                      <StarRating rating={comment.rating} editable={false} />
                    </div>
                    <div className="w-full flex flex-row flex-wrap my-4 text-justify">
                      <p className="ps-2 font-bold poppins-semibold">Comment :</p>
                      <p className="ms-2 quicksand-regular">{comment.comment}</p>
                    </div>
                  </div>
                </div>
              );
            })
            )}
      </div>
      {/* Modal Edit */}
      <Modal isOPen={modalEditOpen} onClose={() => setModalEditOpen(false)}>
        <div className="flex justify-center">
          <h1 className="text-lg font-bold poppins-semibold">Edit Komentar</h1>
        </div>
        {currentComment && (
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <h1 className="poppins-semibold">Comment :</h1>
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                className="w-full rounded-lg mt-3 p-1"
                value={currentComment.comment}
                onChange={(e) =>
                  setCurrentComment({
                    ...currentComment,
                    comment: e.target.value, // Update state saat teks berubah
                  })
                }
              ></textarea>
            </div>
            <div>
              <StarRating
                rating={currentComment.rating} // Isi dengan data yang akan diedit
                editable={true} // Buat rating bisa diedit
                onRatingChange={(newRating) =>
                  setCurrentComment({
                    ...currentComment,
                    rating: newRating, // Update state saat rating berubah
                  })
                }
              />
            </div>
            <div className="mt-7">
              <button
                type="submit"
                className="w-full bg-[#667BC6] py-1 rounded-xl text-white poppins-semibold transition duration-300 ease-in-out hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Modal Delete */}
      <Modal isOPen={modalDeleteOpen} onClose={() => setModalDeleteOpen(false)}>
        <div className="flex justify-center mt-3">
            <h1 className="text-lg font-bold poppins-semibold">Apakah anda yakin ingin menghapus?</h1>
        </div>
        <div className="flex justify-around my-10">
            <button onClick={() => setModalDeleteOpen(false)} className="text-lg bg-[#7C93C3] text-white w-20 h-10 rounded-lg">No</button>
            <button onClick={handleDeleteReview} className="text-lg bg-[#667BC6] text-white w-20 h-10 rounded-lg">Yes</button>
        </div>
      </Modal>
    </>
  );
};

export default DisplayReviews;
