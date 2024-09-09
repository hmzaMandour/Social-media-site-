import React, { useContext, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { dataContext } from "../../App";

export const Stories = () => {
  const [files, setFiles] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState({ url: "", type: "" });

  let obj = useContext(dataContext);

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const openModal1 = (file) => {
    setCurrentMedia({
      url: URL.createObjectURL(file),
      type: file.type,
    });
    setModalIsOpen(true);
  };

  const closeModal1 = () => {
    setModalIsOpen(false);
    setCurrentMedia({ url: "", type: "" });
    URL.revokeObjectURL(currentMedia.url);
  };

  const renderFilePreview = (file) => {
    const fileURL = URL.createObjectURL(file);
    if (file.type.startsWith("image/")) {
      return (
        <img
          src={fileURL}
          alt={file.name}
          className="filter brightness-75 rounded-[25px] bg-cover object-cover w-[120px] h-[200px]"
        />
      );
    } else if (file.type.startsWith("video/")) {
      return (
        <video
          src={fileURL}
          autoPlay
          loop
          muted
          className="filter brightness-75 rounded-[25px] bg-cover object-cover w-[120px] h-[200px]"
        />
      );
    } else {
      return <p>Unsupported file type</p>;
    }
  };
  return (
    <>
      <div className="flex p-4 items-start rounded-[20px] bg-[#eeeeee8f]">
        <div className="rounded-[25px] bg-cover object-cover w-[120px] h-[200px] bg-[#6e009e] m-[10px] hover:bg-[#933bb9] animated-box">
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center gap-3 rounded-[25px] cursor-pointer ml-[30px] mx-[30px] my-[19px] w-[100%] h-[200px]"
          >
            <MdOutlineAddAPhoto size={30} className="text-[#ffff]" />
            <input
              type="file"
              id="file-upload"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="sekiro " style={{ display: "flex" }}>
          {files.length > 0 ? (
            files.map((file, index) => (
              <div key={index} className="relative" style={{ margin: "10px" }}>
                <div className="h-[40px]  mt-[9px] ml-[9px] w-[40px] bg-[#ce2f96] rounded-full z-30 absolute">
                  <div>
                    <img
                      src={obj.img}
                      alt=""
                      className="w-10 h-10 border-2 border-[#e040f] object-center bg-black rounded-full mr-4"
                    />
                  </div>
                </div>
                <div
                  onClick={() => openModal1(file)}
                  className="cursor-pointer"
                >
                  {renderFilePreview(file)}
                </div>
              </div>
            ))
          ) : (
            <div className="w-[120px] h-[200px] rounded-[25px] m-[10px] border border-solid flex justify-center pt-3 bg-white items-center">
              <img
                src="https://cdn.dribbble.com/users/22691/screenshots/1958250/attachments/340010/Button_800x600.gif"
                alt="Placeholder"
              />
            </div>
          )}
        </div>

        {modalIsOpen && (
          <div
            className="fixed inset-0 bg-[#401254] z-[99999]   bg-opacity-[99%] flex items-center justify-center"
            onClick={closeModal1}
          >
            <div
              className="relative bg-white max-w-md w-full max-h-[80vh] rounded-lg shadow-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal1}
                className="absolute top-2 right-2 text-white text-xl bg-[#933bb9] p-2 rounded-full z-[8888]"
              >
                &times;
              </button>
              {currentMedia.type.startsWith("image/") ? (
                <img
                  src={currentMedia.url}
                  alt="Modal content"
                  className="w-full h-auto object-contain"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video autoPlay className="w-full h-full object-cover">
                    <source src={currentMedia.url} type={currentMedia.type} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
