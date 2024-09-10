import React, { useState, useRef, useContext } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { MdDone, MdEvent } from "react-icons/md";
import { CgLivePhoto } from "react-icons/cg";
import { RiGalleryLine } from "react-icons/ri";
import { dataContext } from "../../App";
import userPng from "../../assets/images/user.png";

export const Post = () => {
  const { user, setUser } = useContext(dataContext);
  const [inputChange, setInputChange] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState([]);
  const [indexofposts, setindexofposts] = useState("");

  const fileInputRef = useRef("");

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!inputChange.trim() ) {
      return;
    }
    const updatedPosts = [...user.posts];
    updatedPosts[indexofposts].comments.push({ name: inputChange });
    
    setUser((user) => ({
      ...user,
      posts: updatedPosts,
    }));
    setInputChange('');
  };

  const openModal = (index) => {
    setindexofposts(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setindexofposts("");
  };

  const handlePostTextChange = (e) => {
    if (e.target.value !== "") {
      setPostText(e.target.value);
    }
  };

  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files);
    const images = file.map((ele) => URL.createObjectURL(ele));
    setPostImage([...postImage, ...images]);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleCreatePost = (e) => {
    e.preventDefault();

    if (!postText.trim() && postImage.length === 0) {
      return;
    }

    let newTask = {
      date: getCurrentTime(),
      text: postText,
      image: postImage,
      likes: 0,
      isLiked: false,
      comments: []
    };

    setUser((user) => ({
      ...user,
      posts: [...user.posts, newTask]
    }));

    setPostText('');
    setPostImage([]);
  };

  const handleLike = (index) => {
    const updatedPosts = [...user.posts];
    const post = updatedPosts[index];
    post.isLiked = !post.isLiked;
    post.isLiked ? post.likes++ : post.likes--;

    setUser((user) => ({
      ...user,
      posts: updatedPosts,
    }));
  };

  const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      if (images.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    const handlePrev = () => {
      if (images.length > 0) {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }
    };

    return (
      <div className="relative w-64 h-64">
        {images.length > 1 && (
          <button
            className="absolute right-80 top-28 p-2 bg-gray-300 rounded-full"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
        )}
        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt={`Post Image ${currentIndex}`}
            className="w-full h-full rounded-lg"
          />
        )}
        {images.length > 1 && (
          <button
            className="absolute left-80 top-28 p-2 bg-gray-300 rounded-full"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-around ">
        <div>
          <div>
            <form
              onSubmit={handleCreatePost}
              className="py-[5vh] flex gap-x-8 flex-col gap-4"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={user.img || userPng}
                  alt=""
                  className="w-10 h-10 rounded-full "
                />
                <input
                  type="text"
                  placeholder="Insert a post..."
                  value={postText}
                  onChange={(e)=> handlePostTextChange(e)}
                  className="border-[1px] border-black rounded-full w-[500px] h-11 p-5"
                />
                <button
                  type="submit"
                  className="bg-[#6e009e] px-2 py-2 text-white text-lg font-bold rounded-full"
                >
                  <MdDone />
                </button>
              </div>
              <input
                type="file"
                onChange={handleImageUpload}
                ref={fileInputRef}
                multiple
                style={{ display: "none" }}
              />
              <button
                type="button"
                onClick={triggerFileInput}
                className="btn rounded-full font-semibold flex gap-[150px] mt-3 justify-center items-center"
              >
                <span className="text-sm flex gap-2 items-center">
                  <CgLivePhoto className="text-[#e040fb]" />
                  Live 
                </span>
                <span className="text-sm flex gap-2 items-center">
                  <RiGalleryLine className="text-[#e040fb]" />
                  Photo/Video
                </span>
                <span className="text-sm flex gap-2 items-center">
                  <MdEvent className="text-[#e040fb]" />
                  life event
                </span>
              </button>
              {postImage.length > 0 && (
                <div className="mt-4 relative flex items-center justify-center">
                  <Carousel images={postImage} />
                </div>
              )}
            </form>

            {user.posts.map((post, index) => (
              <div
                key={index}
                className="post bg-white shadow-lg w-[500px] rounded-lg p-4 mb-6 mx-auto"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={user.img || userPng}
                      alt=""
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                  </div>
                  <small className="text-gray-500">{post.date}</small>
                </div>
                <p className="text-gray-700 mb-4">{post.text}</p>
                {post.image?.length > 0 && (
                  <div className="mt-4 relative flex items-center justify-center">
                    <Carousel images={post.image} />
                  </div>
                )}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center pt-3">
                    <button
                      className="flex items-center justify-center gap-2"
                      onClick={() => handleLike(index)}
                    >
                      {post.isLiked ? (
                        <FaHeart className="text-red-500 cursor-pointer text-xl transition transform hover:scale-110" />
                      ) : (
                        <FaRegHeart className="text-gray-500 cursor-pointer text-xl transition transform hover:scale-110" />
                      )}
                      <span>{post.likes}</span>
                    </button>
                  </div>
                  <div className="flex items-center pt-3">
                    <FaComment
                      onClick={() => openModal(index)}
                      className="text-gray-700 cursor-pointer text-xl transition transform hover:scale-110"
                    />
                    <span className="ml-2">{post.comments.length}</span>
                  </div>
                </div>
              </div>
            ))}

            {isModalOpen && indexofposts !== "" && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="comments bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                  <h2 className="text-xl font-bold mb-4">Comments</h2>
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                  >
                    ×
                  </button>
                  <form onSubmit={handleComment} className="flex gap-2 mb-4">
                    <input
                      type="text"
                      value={inputChange}
                      onChange={(e) => setInputChange(e.target.value)}
                      placeholder="Add a comment..."
                      className="commentsInput flex-1 border border-gray-300 rounded px-2 py-1"
                    />
                    <button
                      type="submit"
                      className="bg-[#6e009e] px-2 py-2 text-white text-lg    font-bold rounded-full"
                    >
                      <MdDone />
                    </button>
                  </form>
                  <div className="flex flex-col gap-3">
                    {user.posts[indexofposts].comments.map((comment, index) => (
                      <div className="flex items-center">
                        <img
                          src={user.img || userPng}
                          alt=""
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <p key={index} className="text-gray-700 border-b-2">
                          {comment.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};