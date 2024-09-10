import React, { useContext, useState } from 'react';
import { dataContext } from '../../App';
import { Side } from '../sidebar/sidebar';
import { Navbar } from '../../layouts/navBar';
import { useNavigate } from 'react-router-dom';

const initialGroups = [
  // Your initial groups data
];




const GroupCard = ({ group, onAction, isMember, isOwner }) => {
  const navigate = useNavigate();

  const handlePreview = () => {
    navigate('/post'); 
  };

  return (
    <div
      className="w-[24%] shadow-md h-[224px] overflow-hidden rounded-lg flex flex-col my-1 mx-1 transition-transform duration-300 transform-gpu animate-fade-in"
      style={{ animation: 'fadeIn 0.5s ease-out' }}
    >
      <img className="h-[60%] w-full object-cover" src={group.img} alt={group.name} />
      <div className="flex flex-col p-2 h-[40%]">
        <h3 className="text-base font-medium">{group.name}</h3>
        <p className="text-xs text-gray-700">{group.desc}</p>
        <div className="mt-auto flex justify-center gap-2">
          {isMember ? (
            <>
              {isOwner ? (
                <>
                  <button
                    onClick={() => onAction('delete', group)}
                    className="bg-red-600 text-white py-1 px-2 rounded-md text-xs transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    Delete
                  </button>
                  <button
                    // onClick={() => onAction('preview', group)}
                    onClick={handlePreview}

                    className="bg-purple-600 text-white py-1 px-2 rounded-md text-xs transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    wewe
                  </button>
                </>
              ) : (
                <button
                  onClick={handlePreview}
                  className="bg-purple-600 text-white py-1 px-2 rounded-md text-xs transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  Preview
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => onAction('join', group)}
              className="bg-purple-600 text-white py-1 px-2 rounded-md text-xs transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Join us
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const GroupModal = ({ isOpen, onClose, onAddGroup }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState(null);
  const [error, setError] = useState('');

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImg(file);
      setError('');
    } else {
      setError('Invalid image.');
      setImg(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc || !img) {
      setError('All fields are required.');
      return;
    }
    setError('');
    onAddGroup({ name, desc, file: img });
    setName('');
    setDesc('');
    setImg(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md w-[80%] md:w-[60%] lg:w-[40%]">
        <h2 className="text-xl mb-4">Create Group</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Group Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-purple-600 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
          />
          <textarea
            placeholder="Group Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-purple-600 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full p-2 border border-gray-300 rounded-md text-purple-600 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
            aria-label="Choose image"
          />
          {img && (
            <img
              src={URL.createObjectURL(img)}
              alt="Preview"
              className="w-full h-[150px] object-cover mt-2 rounded-md"
            />
          )}
          {error && (
            <p className="text-red-500 animate-pulse">{error}</p>
          )}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 py-1 px-2 rounded-md text-xs transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white py-1 px-2 rounded-md text-xs transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>

    
  );
};

export const Group = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [groups, setGroups] = useState(initialGroups);
  const [search, setSearch] = useState('');
  let { user, setUser } = useContext(dataContext);
  
  console.log(user);
  

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const addGrp = (groupData) => {
    const newGroup = {
      id: groups.length + 1,
      name: groupData.name,
      desc: groupData.desc,
      img: URL.createObjectURL(groupData.file),
      owner: { id: user.id, name: user.name },
      members: [{ id: user.id, name: user.name }],
      posts:[]
    };

    setGroups(prevGroups => [...prevGroups, newGroup]);

    setUser(prevUser => ({
      ...prevUser,
      groups: [...prevUser.groups, { id: newGroup.id, name: newGroup.name }]
    }));
  };

  const handleAction = (action, group) => {
    if (action === 'join') {
      if (user.groups.some(g => g.id === group.id)) return;
      setUser(prevUser => ({
        ...prevUser,
        groups: [...prevUser.groups, { id: group.id, name: group.name }]
      }));
      setGroups(prevGroups =>
        prevGroups.map(g => 
          g.id === group.id ? { ...g, members: [...g.members, { id: user.id, name: user.name }] } : g
        )
      );
    } else if (action === 'delete') {
      setGroups(prevGroups => {
        const updatedGroups = prevGroups.filter(g => g.id !== group.id);
        console.log("Groups after deleting group:", updatedGroups); // Log groups array
        return updatedGroups;
      });

      setUser(prevUser => {
        const updatedUser = {
          ...prevUser,
          groups: prevUser.groups.filter(g => g.id !== group.id)
        };
        console.log("User after deleting group:", updatedUser); // Log user object
        return updatedUser;
      });
    } else if (action === 'preview') {
      console.log("Previewing group:", group); // Log group object
    }
  };

  return (
  
            <div className="w-[99vw]">
            <Navbar />
            <div className="flex pt-5 pl-10 gap-7">
                <div>
                <Side />
                </div>
                <div className="w-[82%]">
                <div className="p-4">
                <div className="flex mb-4 items-center">
                    <input
                    type="text"
                    placeholder="Search groups"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-purple-600 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                    />
                    <button
                    onClick={openModal}
                    className="bg-purple-600 text-white py-2 px-4 rounded-md text-xs transition-transform duration-300 hover:scale-105 active:scale-95 ml-4"
                    >
                    Create Group
                    </button>
                </div>
                <GroupModal isOpen={modalOpen} onClose={closeModal} onAddGroup={addGrp} />
                <div className="flex flex-wrap">
                    {groups
                    .filter(group => group.name.toLowerCase().includes(search.toLowerCase()))
                    .map(group => (
                        <GroupCard
                        key={group.id}
                        group={group}
                        onAction={handleAction}
                        isMember={user.groups.some(g => g.id === group.id)}
                        isOwner={group.owner.id === user.id}
                        />
                    ))}
                </div>
                </div>
                </div>
            </div>
            </div>


  );
};