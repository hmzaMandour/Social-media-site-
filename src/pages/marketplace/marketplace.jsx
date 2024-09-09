import React, { useRef, useState } from 'react';
import { JsonData } from '../../constant';
import images from '../../constant/images';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Marketplace = () => {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [search, setSearch] = useState('');
    const [newProducts, setNewProducts] = useState([]);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    const handleAddProduct = () => {
        if (title && price && selectedImage) {
            setNewProducts([...newProducts, {
                id: newProducts.length + 1, // Simple ID generation, could be improved
                title,
                price,
                product1: imageUrl,
                rate: 'Not Rated', // Placeholder value
                sold: '0' // Placeholder value
            }]);
            // Reset input fields
            setSelectedImage(null);
            setImageUrl('');
            setPrice('');
            setTitle('');
        } else {
            alert('Please fill out all fields and upload an image.');
        }
    };

    return (
        <div className='flex flex-wrap justify-center gap-5 rounded-lg'>
            <div className='flex mt-3 mb-1 gap-[44vw]'>
                <h1 className='font-medium text-xl'>Marketplace</h1>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder='Start typing....'
                    className='border-2 solid border-black rounded-3xl px-4 py-1'
                />
            </div>

            {JsonData.product
                .filter((item) => search.toLowerCase() === '' || item.title.toLowerCase().includes(search.toLowerCase()))
                .map((e) => (
                    <div key={e.id} >
                        <div className='flex flex-col w-[28vw] h-[45vh] shadow-md rounded-xl'>
                             
                            <img className='w-full h-[62%] rounded-lg' src={images[e.product1]} alt={e.title} />
                            <div className='bg-white h-[38%] rounded-lg mt-0 pt-2 ml-0'>
                                <div className='pl-0 border-b-2 border-gray-100 ml-3 mr-3'>
                                    <p className='text-black flex ml-0 font-semibold text-xl'>{e.price}</p>
                                    <p className='pl-1 text-gray-500 text-xs font-medium mb-3 ml-0'>{e.title}</p>
                                </div>
                                <div className='flex mr-3 ml-3'>
                                    <div className='flex justify-center items-center gap-1'>
                                        <span>
                                            <svg className="w-[2vw] h-[2vw] mt-1 ml-0 text-[#e040fb] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                                            </svg>
                                        </span>
                                        <p className='text-xs font-semibold mt-2 text-gray-500'>{e.rate}</p>
                                    </div>
                                    <div className='ml-24'>
                                        <p className='text-gray-500 text-xs font-semibold mt-2'>{e.sold}</p>
                                    </div>
                                </div>
                            </div>
                       
                            </div>
                             
                    </div>
                ))}

            {newProducts.map((e) => (
                <div key={e.id}>
                    <div className='flex flex-col w-[28vw] h-[45vh] shadow-md rounded-xl'>
                        <img className='w-full h-[62%] rounded-lg' src={e.product1} alt={e.title} />
                        <div className='bg-white h-[38%] rounded-lg mt-0 pt-2 ml-0'>
                            <div className='pl-0 border-b-2 border-gray-100 ml-3 mr-3'>
                                <p className='text-black flex ml-0 font-semibold text-xl'>${e.price}</p>
                                <p className='pl-1 text-gray-500 text-xs font-medium mb-3 ml-0'>{e.title}</p>
                            </div>
                            <div className='flex mr-3 ml-3'>
                                <div className='flex justify-center items-center gap-1'>
                                    <span>
                                        <svg className="w-[2.5vw] h-[2.5vw] mt-1 ml-0 text-[#e040fb] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                                        </svg>
                                    </span>
                                    <p className='text-xs font-semibold mt-2 text-gray-500'>0</p>
                                </div>
                                <div className='ml-24'>
                                    <p className='text-gray-500 text-xs font-semibold mt-2'>---Sold</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className='flex flex-col bg-white w-[28vw] h-[45vh] shadow-lg rounded-xl'>
                <div onClick={handleImageClick} className='flex items-center justify-center p-0'>
                    <div className='border w-full rounded-lg'>
                        {imageUrl ? (
                            <img src={imageUrl} className='w-full rounded-lg' alt="Selected" />
                        ) : (
                            <FaCloudDownloadAlt size={52} />
                        )}
                    </div>
                    <input type="file" ref={fileInputRef} onChange={handleImageChange} className='hidden' />
                </div>
                <div className='mb-1 mt-0'>
                    <input
                        type="number"
                        placeholder='Price....'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='bg-white mt-[2%] w-[28vw] rounded-sm pl-1 focus:outline-none focus:border-0'
                    />
                    <input
                        type="text"
                        placeholder='Title....'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='bg-white w-[28vw] rounded-sm pl-1 mt-1 focus:outline-none focus:border-0'
                    />
                </div>
                <div className='flex items-center bg-white mt-0 h-[12%] rounded-sm w-full'>
                    <div className='flex justify-center items-center gap-1'>
                        <span>
                            <svg className="w-[2.5vw] h-[3vw] mt-1 ml-3 text-[#e040fb] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                            </svg>
                        </span>
                        <p className='text-xs font-semibold mt-2 text-gray-500'>0</p>
                    </div>
                    <div className='ml-24'>
                        <p className='text-gray-500 text-xs font-semibold mt-2'>---Sold</p>
                    </div>
                </div>
                <div className='flex justify-end items-center mt-1 mr-4'>
                    <button onClick={handleAddProduct} className='bg-purple-600 px-5 py-1 rounded-3xl text-[13px] text-white'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
