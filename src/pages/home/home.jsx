import React, { useContext, useState } from "react";
import { Navbar } from "../../layouts/navBar";
import { Side } from "../sidebar/sidebar";
import { Stories } from "./stories";
import { CreatePost } from "./createposts";
import { Post } from "./post";
import { Creators } from "../creators/creators";
import { Friend } from "../friends/friends";
import { dataContext } from "../../App";

export const Homepage = () => {
  let { user, setUser } = useContext(dataContext);

  const [posts, setPosts] = useState([]);
  const [inputChange, setInputChange] = useState("");
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleLike = (index) => {
    const updatedPosts = [...posts];
    const post = updatedPosts[index];
    post.likes += post.isLiked ? -1 : 1;
    post.isLiked = !post.isLiked;
    setPosts(updatedPosts);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleComment = (e) => {
    e.preventDefault();
    const newTab = [...comments];
    let newTask = {
      name: inputChange,
    };
    newTab.push(newTask);
    setComments(newTab);
    setInputChange("");
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex bg-[#6f009e09] pb-20 pt-5 pl-10 justify-between">
          <Side />
          <div>
            <Stories />
            <CreatePost onCreatePost={handleCreatePost} />
            {user.posts.map((post, index) => (
              <Post
                key={index}
                post={post}
                index={index}
                onLike={handleLike}
                onOpenModal={openModal}
                commentsCount={comments.length}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                handleComment={handleComment}
                inputChange={inputChange}
                setInputChange={setInputChange}
                comments={comments}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <Creators />
          </div>
        </div>
      </div>
    </>
  );
};
