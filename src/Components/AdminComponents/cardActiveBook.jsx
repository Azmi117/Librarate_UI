import { useState } from "react";
import Modal from "./Modal";
import Dropzone from "./Dropzone";
import { updateBook, deleteBook } from "../../Services/bookService";
import { toast } from "react-toastify";

const CardActiveBook = ({ book, updateBooks }) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [formData, setFormData] = useState({ ...book });
  const [modalDelete, setModalDelete] = useState(false);

  const token = localStorage.getItem('token');

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handlePhotoUpload = (file, id) => {
    if (id === "dropzone-mobile-tab") {
      setFormData({
        ...formData,
        photoMobile: file,
      });
    } else if (id === "dropzone-xl-desktop") {
      setFormData({
        ...formData,
        photoDesktop: file,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.photoMobile && !formData.photoDesktop) {
      toast.warn('Foto belum diunggah 📸');
      return;
    }

    const formDataPayload = new FormData();
    formDataPayload.append("title", formData.title);
    formDataPayload.append("genre", formData.genre);
    formDataPayload.append("author", formData.author);
    formDataPayload.append("pages", formData.pages);
    formDataPayload.append("sinopsis", formData.sinopsis);
    formDataPayload.append("country", formData.country);
    formDataPayload.append("image_3d", formData.image_3d);
    formDataPayload.append("image_Title", formData.image_Title);
  
    if (formData.photoMobile) {
      formDataPayload.append("photo", formData.photoMobile);
    } else if (formData.photoDesktop) {
      formDataPayload.append("photo", formData.photoDesktop);
    }
    try {
      const update = await updateBook(book.id, formDataPayload, token);
      updateBooks(update, "update");
      setModalEdit(false);
      toast.info('Success Update Book 🎉');
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error('Failed Update Book 😥');
    }
  };

  const handleDeleteBook = async () => {
    try {
      await deleteBook(book.id, token);
      updateBooks(book, "delete");
      setModalDelete(false);
      toast.success('Success Delete Book 🎉');
    } catch (error) {
      console.error("Failed to delete book:", error);
      toast.error('Failed Delete Book 😥');
    }
  };

  return (
    <>
      <button className="transition duration-300 hover:-translate-y-6">
        <div className="w-40 h-72 bg-[#E1D7B7] rounded-md shadow-md 2xl:mb-5">
          <div className="border-b-2 border-gray-700">
            <img
              src={
                book.photo ||
                "https://plus.unsplash.com/premium_photo-1681488159219-e0f0f2542424?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
              className="w-full h-40 rounded-t-md"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="mx-auto mt-2">{book.title}</h1>
            <h1 className="mx-auto mt-3">{book.synopsis}</h1>
          </div>
          <div className="mt-3 flex justify-around">
            <button
              onClick={() => setModalEdit(true)}
              className="w-16 bg-[#7C93C3] text-white rounded-md py-1 shadow-md hover:text-gray-600 amaranth-bold"
            >
              Edit
            </button>
            <button
             onClick={() => setModalDelete(true)}
             className="w-16 bg-[#667BC6] text-white rounded-md py-1 shadow-md hover:text-gray-600 amaranth-bold">
              Delete
            </button>
          </div>
        </div>
      </button>

      {/* Modal Edit */}
      <Modal onClose={() => setModalEdit(false)} isOPen={modalEdit}>
        <div className="flex flex-col">
          <h1 className="text-xl mx-auto poppins-semibold">Edit Book</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="h-96 overflow-y-auto pe-2 [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-400
                dark:[&::-webkit-scrollbar-track]:bg-neutral-500"
            >
            <div className="flex flex-col mt-3 rounded-md">
              <label htmlFor="title" className="lexend-regular">
                Title
              </label>
              <input 
                type="text" 
                className="rounded-md h-8 px-1 shadow-md" 
                id="title" 
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 rounded-md">
              <label htmlFor="genre" className="lexend-regular">
                Genre
              </label>
              <input 
                type="text" 
                className="rounded-md h-8 px-1 shadow-md" 
                id="genre" 
                value={formData.genre}
                onChange={handleInputChange} 
              />
            </div>
            <div className="flex flex-col mt-3 rounded-md">
              <label htmlFor="author" className="lexend-regular">
                Author
              </label>
              <input 
                type="text" 
                className="rounded-md h-8 px-1 shadow-md" 
                id="author" 
                value={formData.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 rounded-md">
              <label htmlFor="pages" className="lexend-regular">
                Pages
              </label>
              <input 
                type="text" 
                className="rounded-md h-8 px-1 shadow-md" 
                id="pages" 
                value={formData.pages}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 rounded-md">
              <label htmlFor="synopsis" className="lexend-regular">
                Synopsis
              </label>
              <textarea
                name="synopsis"
                cols={30}
                rows={5}
                className="rounded-md px-1 shadow-md"
                id="synopsis"
                value={formData.sinopsis}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-3 rounded-md">
                <label htmlFor="" className="lexend-regular">
                    Photo
                </label>
              <Dropzone id="dropzone-xl-desktop" onFileUpload={handlePhotoUpload}/>
            </div>
            <div className="flex flex-col mt-3 rounded-md">
              <label htmlFor="country" className="lexend-regular">
                Country
              </label>
              <select 
                  name="" 
                  id="country" 
                  className="h-7 rounded-md shadow-md rounded-md poppins-regular"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                <option value="" disabled selected>None</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Korea">Korea</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
            <div className="flex flex-col mt-3 rounded-md">
              <label htmlFor="3d_image" className="lexend-regular">
                3D Image
              </label>
              <input 
                type="text" 
                className="rounded-md h-8 px-1 shadow-md" 
                id="3d_image" 
                value={formData.image_3d}
                onChange={handleInputChange}/>
            </div>
            <div className="flex flex-col mt-3 rounded-md">
              <label htmlFor="title_image" className="lexend-regular">
                Title Image
              </label>
              <input 
                type="text" 
                className="rounded-md h-8 px-1 shadow-md" 
                id="title_image" 
                value={formData.image_Title}
                onChange={handleInputChange}
                />
            </div>
            <div className="flex flex-col mt-10 shadow-md rounded-md">
              <button 
              type="submit"
              className="bg-[#667BC6] rounded-md py-1 text-white hover:bg-gray-500"
              >
                Submit
            </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Modal Delete */}
      <Modal onClose={() => setModalDelete(false)} isOPen={modalDelete}>
      <div className="flex flex-col">
          <div className="flex justify-center font-bold mb-10 pt-5">
            <h1 className="poppins-semibold">Apakah anda yakin ingin menghapus?</h1>
          </div>
          <div className="mt-5 mb-10 flex justify-around">
            <button
              className="text-xl font-bold bg-[#7C93C3] shadow-md w-24 h-10 text-white rounded-lg transition duration-300 ease-in-out hover:scale-110"
              onClick={() => setModalDelete(false)}
            >
              No
            </button>
            <button
              className="text-xl font-bold bg-[#667BC6] shadow-md w-24 h-10 text-white rounded-lg transition duration-300 ease-in-out hover:scale-110"
              onClick={handleDeleteBook}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardActiveBook;
