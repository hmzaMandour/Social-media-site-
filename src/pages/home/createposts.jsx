
import React, { useState, useRef, useContext } from 'react';
import { MdAddPhotoAlternate, MdDone, MdEvent } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight, FaVideo } from 'react-icons/fa';
import { CgLivePhoto } from 'react-icons/cg';
import { RiGalleryLine } from 'react-icons/ri';
import { dataContext } from '../../App';

export const CreatePost = ({ onCreatePost }) => {

    let obj = useContext(dataContext); 

  const [postText, setPostText] = useState('')
  const [postImage, setPostImage] = useState([])
  const fileInputRef = useRef(null)

  const handlePostTextChange = (e) => {
    setPostText(e.target.value)
  };

  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files)
    const images = file.map((ele) => URL.createObjectURL(ele))
    setPostImage([...postImage, ...images])
  };

  const triggerFileInput = () => {
    fileInputRef.current.click()
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0');  
    return `${hours}:${minutes}`;
  };

  const handleCreatePost = (e) => {
    e.preventDefault()
    const newPost = {
      text: postText,
      image: postImage,
      date:  getCurrentTime(),
      likes: 0,
      isLiked: false,
      comments: [],
    };
    onCreatePost(newPost)
    setPostImage([])
    setPostText('')
    obj.posts.push(newPost)
  };

  console.log(obj);
  

  return (
    <form onSubmit={handleCreatePost} className="py-[5vh]   flex  gap-x-8  flex-col gap-4 ">
      <div className="flex gap-3  items-center border-b-[1px] pb-5">
      <div>
      <img src={obj.img} alt="" className="w-10 h-10 bg-black rounded-full mr-4" />
      </div>
        <input
          type="text"
          placeholder="Insert a post..."
          value={postText}
          onChange={handlePostTextChange}
          className="border border-solid  rounded-full w-[100%] h-11 p-5"
        />
          <button type="submit" className=" bg-[#6e009e] px-2 py-2 text-white text-lg font-bold rounded-full"
        >
          <MdDone />
        </button>
      </div>
      <input
        type="file"
        onChange={handleImageUpload}
        ref={fileInputRef}
        multiple
        style={{ display: 'none' }}
      />
      <button
        type="button"
        onClick={triggerFileInput}
        className="rounded-full font-semibold flex gap-24 justify-center items-center"
      >
          <span className='text-sm flex gap-2 items-center'><CgLivePhoto className='text-[#e040fb]' />Live Video</span>
          <span className='text-sm flex gap-2 items-center'><RiGalleryLine className="text-[#e040fb]" />Photo/Video</span>
          <span className='text-sm flex gap-2 items-center'><MdEvent className="text-[#e040fb]" />life event</span>
      </button>
      {postImage.length > 0 && (
        <div className="mt-4 relative flex items-center justify-center">
          <Carousel images={postImage} />
        </div>
      )}
    </form>
  );
};

const Carousel = ({ images  }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  };

  const handlePrev = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  };

  return (
    <div className="relative w-64 h-64">
      {images.length > 1 && (
        <button className="absolute right-80 top-28 p-2 bg-gray-300 rounded-full" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
      )}
      {images.length > 0 && <img src={images[currentIndex]} alt={`Post Image ${currentIndex}`} className="w-full h-full rounded-lg" />}
      {images.length > 1 && (
        <button className="absolute left-80 top-28 p-2 bg-gray-300 rounded-full" onClick={handleNext}>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};


