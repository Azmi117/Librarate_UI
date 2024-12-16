import Navbar from "../Components/Navbar";
import Modal from "../Components/bookDetails/Modal";
import StarRating from "../Components/bookDetails/Rating";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";
import { getBookById } from "../Services/bookService";
import {
  getAllReview,
  createReview,
  updateReview,
  deleteReview,
} from "../Services/reviewServices";
import { getUserByID } from "../Services/userService";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(1);
  const [editRating, setEditRating] = useState(1);
  const [comment, setComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [reviews, setReview] = useState(null);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [users, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const savedToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchBook = async () => {
      const convert_Id = parseInt(id);
      try {
        const response = await getBookById(convert_Id, savedToken);
        setBook(response);
      } catch (error) {
        console.log("Error fetching book data:", error);
      }
    };

    const fetchReviewAndUser = async () => {
      const convert_Id = parseInt(id);
      try {
        const reviewz = await getAllReview(convert_Id, savedToken);
        setReview(reviewz); // Set reviews terlebih dahulu

        if (reviewz) {
          const userPromises = reviewz.map((rev) =>
            getUserByID(rev.user_id, savedToken).then((userResponse) => ({
              user_id: rev.user_id,
              data: userResponse,
            }))
          );
          const userz = await Promise.all(userPromises);

          const userMap = {};
          userz.forEach((user) => {
            userMap[user.user_id] = user.data;
          });
          setUser(userMap);
        }
      } catch (error) {
        console.log("Error fetching review or user data:", error);
      }
    };

    const fetchAllData = async () => {
      setLoading(true);
      await fetchBook();
      await fetchReviewAndUser();
      setLoading(false);
    };

    fetchAllData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen opacity-50">
        <Loading/>
      </div>
    )
  }

  const handleCreateReview = async () => {
    const reviewData = {
      book_id: parseInt(id),
      comment: comment,
      rating: rating,
    };

    try {
      await createReview(reviewData, savedToken);
      setIsModalOpen(false);
      setComment("");
      setRating(1);
      window.location.reload();
    } catch (error) {
      console.error("Failed to create review:", error);
    }
  };

  const handleUpdateReview = async () => {
    const reviewData = {
      comment: editComment,
      rating: editRating,
    };

    try {
      // Ambil semua review berdasarkan ID buku
      const updatedReviews = await getAllReview(id, savedToken);

      // Cari review yang ingin diperbarui
      const targetReview = updatedReviews.find(
        (review) => review.id === selectedReviewId
      ); // Ganti dengan cara Anda memilih review
      if (!targetReview) {
        console.error("Review yang ingin diperbarui tidak ditemukan");
        return;
      }

      // Perbarui hanya review tertentu
      await updateReview(targetReview.id, reviewData, savedToken);

      setIsModalEditOpen(false);
      setEditComment("");
      setEditRating(1);
      window.location.reload();
    } catch (error) {
      console.error("Failed to update review:", error);
    }
  };

  const handleEditClick = (review) => {
    // Mengisi state dengan data review yang ingin diedit
    setEditComment(review.comment);
    setEditRating(review.rating);
    setSelectedReviewId(review.id); // Menyimpan ID review yang sedang diedit
    setIsModalEditOpen(true); // Membuka modal edit
  };

  const handleDeleteReview = async () => {
    const delatedReviews = await getAllReview(id, savedToken);

    // Cari review yang ingin diperbarui
    const targetReview = delatedReviews.find(
      (review) => review.id === selectedReviewId
    ); // Ganti dengan cara Anda memilih review
    if (!targetReview) {
      console.error("Review yang ingin diperbarui tidak ditemukan");
      return;
    }

    try {
      await deleteReview(targetReview.id, savedToken);
      setIsModalDeleteOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  const handleDeleteClick = (review) => {
    setSelectedReviewId(review.id);
    setIsModalDeleteOpen(true);
  };

  const decodeToken = jwtDecode(savedToken);

  return (
    <>
      <div className="overflow-x-hidden md:min-h-screen md:flex flex-col">
        <div className="flex-grow">
          <Navbar />
          <div className="w-5/6 mx-auto rounded-t-lg mt-5">
            <div className="md:flex flex-row">
              <img
                src={book.photo}
                alt=""
                className="w-full md:w-3/6 md:h-96 h-72 shadow-md md:rounded-s-lg md:rounded-e-none rounded-t-lg"
              />
              <div className="w-full h-60 md:h-96 bg-[#E1D7B7] md:rounded-s-none md:rounded-e-lg rounded-b-lg shadow-md pt-2">
                <div className="flex md:my-7">
                  <h1 className="text-lg ms-5">Title</h1>
                  <h1 className="text-lg ms-2">:</h1>
                  <h1 className="text-lg ms-2">{book.title}</h1>
                </div>
                <div className="flex mt-3 md:my-7">
                  <h1 className="text-lg ms-5">Author</h1>
                  <h1 className="text-lg ms-2">:</h1>
                  <h1 className="text-lg ms-2">{book.author}</h1>
                </div>
                <div className="flex mt-3 md:my-7">
                  <h1 className="text-lg ms-5">Pages</h1>
                  <h1 className="text-lg ms-2">:</h1>
                  <h1 className="text-lg ms-2">{book.pages}</h1>
                </div>
                <div className="flex mt-3 md:my-7">
                  <h1 className="text-lg ms-5">Upload By</h1>
                  <h1 className="text-lg ms-2">:</h1>
                  <h1 className="text-lg ms-2">{book.upload_by}</h1>
                </div>
                <div className="flex mt-3 md:my-7">
                  <h1 className="text-lg ms-5">Genre</h1>
                  <h1 className="text-lg ms-2">:</h1>
                  <h1 className="text-lg ms-2">{book.genre}</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button onClick={() => setIsModalOpen(true)} className="text-lg">
                Tambah Komentar
              </button>
            </div>
            <div className="my-2">
              <h1 className="text-lg">Komentar</h1>
            </div>
            {reviews && reviews.length > 0 ? (
              reviews?.map((review, index) => (
                <div className="w-full bg-[#D9D9D9] rounded-lg shadow-md mb-5">
                  <div className="flex flex-row" key={index}>
                    <div className="w-full flex flex-col">
                      <div className="flex justify-between">
                        <div className="flex">
                          <img
                            src={users?.[review.user_id]?.photo || ""}
                            alt="User"
                            className="rounded-full w-10 h-10 ms-4 mt-4"
                          />
                          <h1 className="mt-5 ms-2">
                            {users?.[review.user_id]?.username || "Loading..."}
                          </h1>
                        </div>
                        {review.user_id === decodeToken.id && (
                          <div className="w-2/4 flex justify-end mt-4">
                            <button
                              onClick={() => handleDeleteClick(review)}
                              className="group"
                            >
                              <img
                                src="https://www.svgrepo.com/show/525133/trash-bin-minimalistic.svg"
                                alt="trash-icon"
                                className="w-7 group-hover:[filter:brightness(0)_saturate(100%)_invert(49%)_sepia(66%)_saturate(2696%)_hue-rotate(319deg)_brightness(86%)_contrast(107%);] ease-in-out hover:scale-110"
                              />
                            </button>

                            <button
                              className="me-3 ms-10 group"
                              onClick={() => handleEditClick(review)}
                            >
                              <img
                                src="https://www.svgrepo.com/show/523595/pen-new-square.svg"
                                alt=""
                                className="w-6 group-hover:[filter:brightness(0)_saturate(100%)_invert(43%)_sepia(60%)_saturate(3502%)_hue-rotate(220deg)_brightness(97%)_contrast(88%);] ease-in-out hover:scale-110"
                              />
                            </button>
                          </div>
                        )}
                      </div>
                      <div>
                        {/* Gunakan review.rating untuk StarRating */}
                        <h1 className="mt-3 ms-3">
                          <StarRating rating={review.rating} editable={false} />
                        </h1>
                      </div>
                      <div className="w-82 flex pb-5">
                        <h1 className="my-3 mx-5 text-justify w-full">
                          <b>Komentar : </b>
                          {review.comment}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full bg-[#D9D9D9] rounded-lg py-7 mx-auto mt-5 mb-20 shadow-md">
                <h1 className="font-bold flex justify-center">
                  There is no comment on this post
                </h1>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>

      {/* Modal Tambah Komentar */}
      <Modal isOPen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col font-bold text-lg">
          <div className="flex justify-center mt-2">
            <h2>Komentar & Rating</h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateReview();
            }}
          >
            <div className="mt-11">
              <h2>Komentar</h2>
              <textarea
                name="komentar"
                cols="20"
                rows="7"
                className="w-full mt-3 rounded-md px-1 shadow-md"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-7">
              <StarRating
                rating={rating}
                editable={true}
                onRatingChange={setRating}
              />
            </div>
            <div className="mt-10 mb-3 flex justify-center">
              <button
                type="submit"
                className="w-full bg-[#667BC6] rounded-md text-white py-1 transition duration-300 ease-in-out hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Modal Edit Komentar */}
      <Modal isOPen={isModalEditOpen} onClose={() => setIsModalEditOpen(false)}>
        <div className="flex flex-col font-bold text-lg">
          <div className="flex justify-center mt-2">
            <h2>Edit Komentar & Rating</h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateReview();
            }}
          >
            <div className="mt-11">
              <h2>Komentar:</h2>
              <textarea
                name="komentar"
                cols="20"
                rows="7"
                className="w-full mt-3 rounded-md px-1 shadow-md"
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-7">
              <StarRating
                rating={editRating}
                editable={true}
                onRatingChange={setEditRating}
              />
            </div>
            <div className="mt-10 mb-3 flex justify-center">
              <button
                type="submit"
                className="w-full bg-[#667BC6] rounded-md text-white py-1 transition duration-300 ease-in-out hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Modal Hapus Komentar */}
      <Modal
        isOPen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
      >
        <div className="flex flex-col">
          <div className="flex justify-center font-bold mb-10 pt-5">
            <h1>Apakah anda yakin ingin menghapus?</h1>
          </div>
          <div className="mt-5 mb-10 flex justify-around">
            <button
              className="text-xl font-bold bg-[#7C93C3] shadow-md w-24 h-10 text-white rounded-lg transition duration-300 ease-in-out hover:scale-110"
              onClick={() => setIsModalDeleteOpen(false)}
            >
              No
            </button>
            <button
              className="text-xl font-bold bg-[#667BC6] shadow-md w-24 h-10 text-white rounded-lg transition duration-300 ease-in-out hover:scale-110"
              onClick={handleDeleteReview}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default BookDetails;
