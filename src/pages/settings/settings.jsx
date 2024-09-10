import React, { useContext, useRef, useState } from "react";
import { GrContactInfo } from "react-icons/gr";
import { MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Navbar } from "../../layouts/navBar";
import { Side } from "../sidebar/sidebar";
import { dataContext } from "../../App";

export const Settings = () => {
  let { user, setUser } = useContext(dataContext);
  const [isOn, setIsOn] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(user.img);
  const fileInputRef = useRef(null);

  const saveAll = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");

    setUser((user) => ({
      ...user,
      name: name,
    }));
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setUploadedImg(fileURL);

      setUser({ ...user, img: fileURL });
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex pt-5 pl-10">
          <div>
            <Side />
          </div>
          <div className="w-[82%]">
            <div className="px-10 pb-10">
              <p className="font-bold text-[20px] pb-5">Settings</p>

              <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-5 rounded-2xl p-5 bg-white">
                {/* Personal Info Section */}
                <div className="flex items-center gap-[5px] pb-5">
                  <GrContactInfo className="text-[#e040fb]" />
                  <p className="font-semibold">Edit personal info</p>
                </div>
                <div className="text-center m-auto flex flex-col items-center gap-3">
                  <img
                    src={uploadedImg || "default-image-url.jpg"} // Display uploaded or default image
                    alt=""
                    className="bg-red-300 w-[130px] h-[130px] rounded-[50%]"
                  />
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="rounded-full font-semibold flex gap-24 justify-center items-center"
                  >
                    <span className="border-solid border-[1px] border-gray-400 rounded-md py-1 px-4 font-semibold text-[12px]">
                      Upload new photo
                    </span>
                  </button>
                  {/* Invisible file input to handle file uploads */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
                <form
                  onSubmit={(e) => {
                    saveAll(e);
                  }}
                  className="flex justify-between pb-4"
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Your new username..."
                    className="border border-solid rounded-md w-[30%] p-2 placeholder:text-[13px]"
                  />
                  <input
                    type="text"
                    placeholder="Your new email..."
                    className="border border-solid rounded-md w-[30%] p-2 placeholder:text-[13px]"
                  />
                  <input
                    type="text"
                    placeholder="Your new password..."
                    className="border border-solid rounded-md w-[30%] p-2 placeholder:text-[13px]"
                  />
                  <button
                    type="submit"
                    className="text-[#e040fb] text-lg font-bold rounded-full"
                  >
                    <MdDone />
                  </button>
                </form>

                {/* Password Edit Section */}
                <div>
                  <div className="flex items-center gap-[5px]">
                    <AiOutlineDelete className="text-red-500" />
                    <p className="font-semibold text-red-500 underline text-[14px] cursor-pointer">
                      Delete your account
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};