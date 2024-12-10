import { useState } from "react";

const Dropzone = ({onFileUpload}) => {
    const [fileName, setFileName] = useState("");

    const handelDrop = (acceptFiles) => {
      if (acceptFiles.length > 0) {
          const file = acceptFiles[0];
          const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
          const maxFileSize = 15 * 1024 * 1024; // 2MB
  
          if (!allowedTypes.includes(file.type)) {
              alert("File tidak valid. Harap unggah file JPEG, PNG, atau GIF.");
              return;
          }
  
          if (file.size > maxFileSize) {
              alert("Ukuran file terlalu besar. Maksimum 2MB.");
              return;
          }
  
          if (onFileUpload) {
              onFileUpload(file); // Jangan lupa untuk meneruskan ID
          }
          setFileName(file.name);
      }
  };
  

    const handleChange = (e) => {
        const files = e.target.files;
        handelDrop(files);
    }

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0]; // Ambil file pertama yang dipilih
  //   if (file) {
  //     onFileUpload(file); // Panggil fungsi onFileUpload dengan file yang dipilih
  //   }
  // };

    return(
        <>
            <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-5/6 xl:w-5/6 h-52 md:h-64 lg:h-40 xl:h-48 2xl:h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
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
                    {fileName ? (
                        <p className="mb-2 text-sm text-slate-950">{fileName}</p>
                    ):(
                      <>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p className="text-xs xl:text-[0.7rem] text-gray-500">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </>
                    )}
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" onChange={handleChange} />
                </label>
              </div>
        </>
    )
}

export default Dropzone;