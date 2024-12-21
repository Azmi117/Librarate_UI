import Sidebar from "../../Components/AdminComponents/SideBar";
import Dropzone from "../../Components/AdminComponents/Dropzone";
import { createBook } from "../../Services/bookService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store"

const InsertBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        author: '',
        pages: '',
        sinopsis: '',
        photoMobile: null,
        photoDesktop: null,
        country: '',
        image_3d: '',
        image_Title: '',
    });

    const navigate = useNavigate();
    const { token, validateToken, isLoggedIn } = useAuthStore();

    useEffect(() => {
        // Validasi token saat komponen dirender
        validateToken();

        if (!token) {
            navigate('/login');
        }
    }, [token, isLoggedIn, navigate, validateToken]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
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
          await createBook(formDataPayload, token);
          alert("Book created successfully!");
        } catch (error) {
          console.error("Error updating book:", error);
          alert("Failed to created book!");
        }
      };

    return(
        <>
            <div className="lg:flex flex-col">
                <div className="bg-[#E1D7B7] lg:bg-inherit lg:w-96 lg:h-[28rem] lg:ms-[27rem] lg:mt-14 xl:ms-[33rem] 2xl:mt-8 2xl:ms-[37rem]">
                    <Sidebar/>
                    <img src="../magic-book.png" alt="" className="absolute hidden lg:block w-16 h-16 ms-32 2xl:ms-40 lg:-mt-[40px] xl:-mt-[30px]"/>
                    <form onSubmit={handleSubmit} className="bg-[#E1D7B7] lg:w-80 2xl:w-96 lg:h-[31rem] lg:flex items-center xl:h-[42rem] lg:rounded-xl lg:pe-2">
                        <div className="bg-[#E1D7B7] lg:w-80 xl:w-96 lg:h-[28rem] xl:h-[38rem] lg:ms-3 lg:rounded-md lg:overflow-y-auto pe-2 [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-400
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-500">
                            <div className="w-4/5 mt-10 mx-auto flex flex-col">
                                <label htmlFor="title" className="md:text-lg lg:text-base">Title</label>
                                <input 
                                    type="text" 
                                    className="mt-2 h-8 md:h-10 lg:h-8 rounded-md px-1 shadow-md" 
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-4/5 mt-6 mx-auto flex flex-col">
                                <label htmlFor="genre" className="md:text-lg lg:text-base">Genre</label>
                                <select 
                                    name="genre" 
                                    id="genre" 
                                    className="rounded-md h-8 md:h-10 lg:h-8 mt-2 shadow-md" 
                                    value={formData.genre}
                                    onChange={handleInputChange}
                                >
                                    <option disabled selected>Genre</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Mystery">Mystery</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Romance">Adventure</option>
                                    <option value="Romance">Sci-fi</option>
                                    <option value="Romance">Comedy</option>
                                    <option value="Romance">Animation</option>
                                </select>
                            </div>
                            <div className="w-4/5 mt-6 mx-auto flex flex-col">
                                <label htmlFor="author" className="md:text-lg lg:text-base">Author</label>
                                <input 
                                    type="text" 
                                    className="mt-2 h-8 md:h-10 lg:h-8 rounded-md px-1 shadow-md" 
                                    id="author"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-4/5 mt-6 mx-auto flex flex-col">
                                <label htmlFor="pages" className="md:text-lg lg:text-base">Pages</label>
                                <input 
                                    type="text" 
                                    className="mt-2 h-8 md:h-10 lg:h-8 rounded-md px-1 shadow-md" 
                                    id="pages"
                                    name="pages"
                                    value={formData.pages}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-4/5 mt-6 mx-auto flex flex-col">
                                <label htmlFor="synopsis" className="md:text-lg lg:text-base">Synopsis</label>
                                <textarea 
                                    name="sinopsis" 
                                    id="synopsis" 
                                    cols="30" 
                                    rows="5" 
                                    className="mt-2 rounded-lg shadow-md p-1"
                                    value={formData.sinopsis}
                                    onChange={handleInputChange}
                                >

                                </textarea>
                            </div>
                            <div className="w-4/5 mt-6 mx-auto flex flex-col">
                                <label htmlFor="synopsis" className="md:text-lg lg:text-base">Photo</label>
                                <Dropzone id="dropzone-xl-desktop" onFileUpload={handlePhotoUpload}/>
                            </div>
                            <div className="w-4/5 mt-6 mx-auto flex flex-col">
                                <label htmlFor="country" className="md:text-lg lg:text-base">Country</label>
                                <select 
                                    name="country" 
                                    id="country" 
                                    className="rounded-md h-8 md:h-10 lg:h-8 mt-2"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                >
                                    <option disabled selected>Country</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Korea">Korea</option>
                                    <option value="Japan">Japan</option>
                                </select>
                            </div>
                            <div className="w-4/5 mt-6 mx-auto flex flex-col">
                                <label htmlFor="3D_image" className="md:text-lg lg:text-base">Link 3D Image</label>
                                <input 
                                    type="text" 
                                    className="mt-2 h-8 md:h-10 lg:h-8 rounded-md px-1 shadow-md" 
                                    name="image_3d"
                                    id="3D_image"
                                    value={formData.image_3d}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-4/5 mt-6 pb-6 mx-auto flex flex-col">
                                <label htmlFor="Image_title" className="md:text-lg lg:text-base">Link Image Title</label>
                                <input 
                                    type="text" 
                                    className="mt-2 h-8 md:h-10 lg:h-8 rounded-md px-1 shadow-md" 
                                    name="image_Title"
                                    id="Image_title"
                                    value={formData.image_Title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-4/5 mt-3 pb-8 mx-auto flex flex-col">
                                <button 
                                    type="submit" className="bg-[#667BC6] py-1 rounded-xl hover:text-white md:text-lg lg:text-base">Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InsertBook;