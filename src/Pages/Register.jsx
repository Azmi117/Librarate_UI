const Register = () => {
  return (
    <>
      <div className="xl:flex flex-row">
        <div className="w-960 xl:w-3/4 min-h-screen bg-[url('./scales.jpg')] bg-[center_bottom] bg-cover overflow-x-hidden">
          {/* Mobile & Tab */}
          <div className="xl:hidden flex flex-col mt-14 overflow-y-auto">
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
                type="text"
                id="email"
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
                type="text"
                id="password"
                className="w-5/6 md:w-3/6 mx-auto h-9 lg:h-11 rounded-md bg-[#D9D9D9] border border-slate-950 px-1"
              />
            </div>
            <div className="mt-6 lg:mt-10 flex flex-col">
              <label
                htmlFor="password"
                className="pacifico-regular text-white ms-11 md:ms-52 lg:ms-64 text-xl"
              >
                Photo
              </label>

              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-5/6 md:w-3/6 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-4 md:mt-10 lg:mt-16">
              <button className="w-5/6 md:w-3/6 pacifico-regular text-white text-lg bg-[#1E2A5E] border border-white rounded-md h-10 lg:h-12 lg:text-xl">
                Register
              </button>
            </div>
            <button className="pacifico-regular text-white mt-3 md:mt-7 text-lg underline mb-3 lg:text-2xl">
              Sign in here
            </button>
          </div>
        </div>

        {/* Tab XL & Desktop */}
        <div className="hidden xl:flex justify-center bg-[#667BC6] w-1/5 h-full mx-auto mt-10 rounded-lg bg-opacity-55">
          <div className="flex flex-col w-full">
            <h1 className="mt-5 text-2xl text-[#55679C] pacifico-regular mx-auto">
              Register
            </h1>
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
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center w-5/6 justify-center h-56 xl:h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs xl:text-[0.7rem] text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div className="mt-7 flex justify-center">
                <button className="w-5/6 bg-[#1E2A5E] text-white pacifico-regular h-8 rounded-md">Register</button>
            </div>
            <div className="mt-7 flex justify-center">
                <button className="pacifico-regular text-gray-500 underline mb-5">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
