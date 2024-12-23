import { Link } from "react-router-dom";
import Dropzone from "../Components/Register/Dropzone";
import { useState } from "react";
import * as authService from "../Services/authServices"
import { toast } from 'react-toastify';

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    photoMobile: null,
    photoDesktop: null,
  });

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
  
    // Buat instance FormData
    const formDataPayload = new FormData();
    formDataPayload.append("username", formData.username);
    formDataPayload.append("email", formData.email);
    formDataPayload.append("password", formData.password);
  
    if (formData.photoMobile) {
      formDataPayload.append("photo", formData.photoMobile);
    } else if (formData.photoDesktop) {
      formDataPayload.append("photo", formData.photoDesktop);
    }
  
    try {
      const response = await authService.register(formDataPayload);
      console.log("User registered successfully:", response);
      toast.success('Success Create Account 🎉');
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error('Failed Create Account 😥');
    }
  };
  

  return (
    <>
      <div className="xl:flex flex-row">
        <div className="w-960 xl:w-3/4 min-h-screen bg-[url('/scales.jpg')] bg-[center_bottom] bg-cover overflow-x-hidden">
          {/* Mobile & Tab */}
          <div className="xl:hidden flex flex-col mt-14 overflow-y-auto">
            <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <h1 className="text-4xl pacifico-regular text-white">Register</h1>
            </div>
              <div className="mt-6 lg:mt-10 flex flex-col">
                <label
                  htmlFor="username"
                  className="pacifico-regular text-white ms-11 md:ms-52 lg:ms-64 text-xl"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-5/6 md:w-3/6 mx-auto h-9 lg:h-11 rounded-md bg-[#D9D9D9] border border-slate-950 px-1"
                />
              </div>
              <div className="mt-5 lg:mt-10 flex flex-col">
                <label
                  htmlFor="email"
                  className="pacifico-regular text-white ms-11 md:ms-52 lg:ms-64 text-xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-5/6 md:w-3/6 mx-auto h-9 lg:h-11 rounded-md bg-[#D9D9D9] border border-slate-950 px-1"
                />
              </div>
              <div className="mt-6 lg:mt-10 flex flex-col">
                <label
                  htmlFor="password"
                  className="pacifico-regular text-white ms-11 md:ms-52 lg:ms-64 text-xl"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-5/6 md:w-3/6 mx-auto h-9 lg:h-11 rounded-md bg-[#D9D9D9] border border-slate-950 px-1"
                />
              </div>
              <div className="mt-6 lg:mt-10 flex flex-col">
                <label
                  htmlFor="photo"
                  className="pacifico-regular text-white ms-11 md:ms-52 lg:ms-64 text-xl"
                >
                  Photo
                </label>
                <Dropzone id="dropzone-mobile-tab" onFileUpload={handlePhotoUpload}/>
              </div>
              <div className="flex justify-center mt-4 md:mt-10 lg:mt-16">
                <button type="submit" className="w-5/6 md:w-3/6 pacifico-regular text-white text-lg bg-[#1E2A5E] border border-white rounded-md h-10 lg:h-12 lg:text-xl">
                  Register
                </button>
              </div>
            <div className="flex justify-center">
              <Link to={'/login'} className="pacifico-regular text-white mt-3 md:mt-7 text-lg underline mb-3 lg:text-2xl">
                Sign in
              </Link>
            </div>
            </form>
          </div>
        </div>

        {/* Tab XL & Desktop */}
        <div className="hidden xl:flex justify-center bg-[#667BC6] w-1/5 h-full mx-auto mt-10 rounded-lg bg-opacity-55">
          <div className="flex flex-col w-full">
            <h1 className="mt-5 text-2xl text-[#55679C] pacifico-regular mx-auto">
              Register
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="username"
                  className="ms-7 pacifico-regular text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-5/6 mx-auto rounded-md h-7 bg-[#D9D9D9] border border-slate-950 px-1"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="email"
                  className="ms-7 pacifico-regular text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-5/6 mx-auto rounded-md h-7 bg-[#D9D9D9] border border-slate-950 px-1"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="password"
                  className="ms-7 pacifico-regular text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-5/6 mx-auto rounded-md h-7 bg-[#D9D9D9] border border-slate-950 px-1"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="photo"
                  className="ms-7 pacifico-regular text-white"
                >
                  Photo
                </label>
                <Dropzone id="dropzone-xl-desktop" onFileUpload={handlePhotoUpload}/>
              </div>
              <div className="mt-7 flex justify-center">
                  <button type="submit" className="w-5/6 bg-[#1E2A5E] text-white pacifico-regular h-8 rounded-md">Register</button>
              </div>
            </form>
            <div className="mt-7 flex justify-center">
                <Link to={'/login'} className="pacifico-regular text-gray-500 underline mb-5">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;