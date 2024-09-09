import React, { useContext } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import images from '../../constant/images';
import { MdDone } from 'react-icons/md';
import { dataContext } from '../../App';

export const Post = ({ post, index, onLike, onOpenModal, commentsCount, isModalOpen, closeModal, handleComment, inputChange, setInputChange, comments }) => {
  const obj = useContext(dataContext);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={obj.img || images.defaultProfile} alt="" className="w-12 h-12 bg-black rounded-full mr-4" />
          <h3 className="font-semibold text-lg">{obj.name || 'User'}</h3>
        </div>
        <small className="text-gray-500">{post.date || ''}</small>
      </div>
      <p className="text-gray-700 mb-4">{post.text || 'No text available'}</p>
      {post.image?.length > 0 && (
        <div className="mt-6 relative flex items-center justify-center">
          <Carousel images={post.image} />
        </div>
      )}
      <div className="flex gap-6 mb-4 mt-4">
        <button className="flex items-center justify-center gap-2" onClick={() => onLike(index)}>
          {post.isLiked ? (
            <FaHeart className="text-red-500 cursor-pointer text-xl transition transform hover:scale-110" />
          ) : (
            <FaRegHeart className="text-gray-500 cursor-pointer text-xl transition transform hover:scale-110" />
          )}
          <span>{post.likes }</span>
        </button>
        <div className="flex items-center">
          <FaComment
            onClick={onOpenModal}
            className="text-gray-700 cursor-pointer text-xl transition transform hover:scale-110"
          />
          <span className="ml-2">{commentsCount || 0}</span>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
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
                value={inputChange || ''}
                onChange={(e) => setInputChange(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 border border-gray-300 rounded px-2 py-1"
              />
              <button
                type="submit"
                className="bg-[#6e009e] px-2 py-2 text-white text-lg font-bold rounded-full"
              >
                <MdDone />
              </button>
            </form>
            <div className="flex flex-col gap-3">
              {comments?.map((comment, index) => (
                <p key={index} className="text-gray-700 border-b-2">
                  {comment.name || 'Anonymous'}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-64 h-64">
      {images.length > 1 && (
        <button className="absolute right-0 top-1/2 p-2 bg-gray-300 rounded-full" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
      )}
      {images.length > 0 && <img src={images[currentIndex]} alt={`Post Image ${currentIndex}`} className="w-full h-full rounded-lg" />}
      {images.length > 1 && (
        <button className="absolute left-0 top-1/2 p-2 bg-gray-300 rounded-full" onClick={handleNext}>
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};
