import React, { useState, useRef } from 'react';
import { FaHeart, FaRegHeart, FaComment } from 'react-icons/fa'; 
import { MdAddPhotoAlternate  } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import images from "../../constant/images";
import { Navbar } from '../../layouts/navBar';
import { Side } from '../sidebar/sidebar';
import { Stories } from './stories';

export const Homepage = () => {
  
  const [comments, setComments] = useState([]);
  const [likes , setLikes] = useState(0)
  const [inputChange, setInputChange] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState(''); 
  const [postImage, setPostImage] = useState(null); 
  const [posts, setPosts] = useState([]); 
  const fileInputRef = useRef("");

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };



  const handleComment = (e) => {
    e.preventDefault()
    
      const newTab = [...comments];
      let newTask = {
          name: inputChange,
      };
      newTab.push(newTask)
      setComments(newTab)
      setInputChange("")

  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPostImage(file);
  };

  const handleCreatePost = (e) => {
    e.preventDefault()
    
      const newTab = [...posts];
      let newTask = {
          text: postText,
          image: postImage ? URL.createObjectURL(postImage) : null, 
          likes: 0,
          isLiked: false ,
          comments: []
      };
      newTab.push(newTask);
      setPosts(newTab);
      setInputChange(""); 
      setPostText(" ")
 
   
    };

    const handleLike = (index) => {
      const updatedPosts = [...posts];
      const post = updatedPosts[index];
      if (post.isLiked) {
        post.likes -= 1; 
      } else {
        post.likes += 1; 
      }
      post.isLiked = !post.isLiked; 
      setPosts(updatedPosts);
    };

    const handleLikes = () => {
      
      if (likes == 0) {
        setLikes(1); 
        
      } else {
        setLikes(0); 
      }
    };

    console.log(posts);
    
  return (
    <>
    <Navbar/>
    <div className='flex justify-around'>

    <div>
        <Side/>
    </div>
    <div>
        <div>
            <Stories/>
        </div>
        <div>
        





    
        <div>
        <form onSubmit={handleCreatePost} className="py-[5vh]   flex  gap-x-8  flex-col gap-4">
       <div className='flex gap-3 items-center'>
        <div className='p- bg-zinc-950 rounded-full'></div>
       <input 
          type="text" 
          placeholder="Insert a post..." 
          value={postText} 
          onChange={handlePostTextChange}
          className=" border border-[1px] border-black rounded-full w-96 h-11 p-5" 
        />
        <button type="submit" className=" bg-purple-800 px-4 py-2 text-white text-lg font-bold rounded-full"
        >
          Post
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
          className="  text-purple-800 text-xl rounded-full font-bold flex gap-24 "
        >
            <span className='text-sm text-gray-600 flex gap-1 items-center'><MdAddPhotoAlternate className="text-purple-800 text-xl" />Photo/Video</span>
           <span className='text-sm text-gray-600 flex gap-1 items-center'><FaVideo className='text-purple-800 text-xl' />Live</span>
           
        </button>
      </form>

     
      {posts.map((post, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={images.attack}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="font-semibold text-lg">User</h3>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{post.text}</p>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="rounded-lg mb-4 max-h-64 object-cover w-full"
            />
          )}
          <div className="flex gap-4 mb-4">
            <div className="flex items-center">
            <button className='flex items-center justify-center gap-2' onClick={() => handleLike(index)}>
                {post.isLiked ? (
                  <FaHeart className="text-red-500 cursor-pointer text-xl transition transform hover:scale-110" />
                ) : (
                  <FaRegHeart className="text-gray-500 cursor-pointer text-xl transition transform hover:scale-110" />
                )}
                <span onClick={handleLikes} > {post.likes} </span>
              </button>
            </div>
            <div className="flex items-center">
              <FaComment
                onClick={openModal}
                className="text-gray-700 cursor-pointer text-xl transition transform hover:scale-110"
              />
              <span className="ml-2">{comments.length}</span>
            </div>
          </div>
        </div>
      ))}

     
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
           
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
          >
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
                name="comment"
                value={inputChange}
                onChange={(e) => setInputChange(e.target.value)} 
                placeholder="Add a comment..."
                className="flex-1 border border-gray-300 rounded px-2 py-1   "
              />
              <button
                type="submit"
                className="bg-purple-800 px-4 py-4 text-white text-lg font-bold rounded-full "
              >
                Post
              </button>
            </form>
            <div className="flex flex-col gap-3">
              {comments.map((comment, index) => (
                <p key={index} className="text-gray-700 border-b-2">
                  {comment.name} 
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
        </div>
    </div>
    </div>
    <div>

    </div>
   
    </div>
    </>
  );
};
