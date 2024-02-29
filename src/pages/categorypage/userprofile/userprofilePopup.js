import React, { useState, useRef, useEffect } from 'react';
import './userprofilePopup.css';
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaRegCheckSquare } from "react-icons/fa";
// import { Link } from 'react-router-dom';

function UserProfilePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [notOpen, setNotOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setNotOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup1 = (e) => {
    // Prevent the event from propagating to the parent elements
    e.stopPropagation();
    setNotOpen(!notOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>User</button>
      {isOpen && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <p><CgProfile /></p>
            <p>Aman Sharma</p>
          </div>
          <div className='modalemail'>Email: amansharma100@gmail.com</div>
          <div className='modalprofile'>
            <p><FaRegEdit /></p>
            <button onClick={togglePopup1}>Edit Profile
              {notOpen && (
                <div className="modal1" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-content1">
                    <div className='modalprofile'>
                      <p><FaRegEdit /></p>
                      <p>Edit Profile</p>
                    </div>
                    <div className='modal1email'>
                      <div className='modal2'>
                        Email Address/Phone no
                        <input type='text' placeholder='Enter your Email Address' />
                      </div>
                      <div className='modal21'>
                        User name
                        <input type='text' placeholder='Enter your User name' />
                      </div>
                      <div className='modal21'>
                        New Password
                        <input type='password' placeholder='Enter your Password' />
                      </div>
                      <div className='modal21'>
                        Confirm Password
                        <input type='password' placeholder='Enter your Password' />
                      </div>
                    </div>
                    <div className='modal1-btn'> <button>Save</button></div>
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className='modalprofile'>
            <p><GoHeart /></p>
            <p>Favourites</p>
          </div>
          <div className='modalprofile'>
            <p><FaRegCheckSquare /></p>
            <p>Enquired</p>
          </div>
          <div className='modal-btn'> <button>Logout</button></div>
        </div>
      )}
    </div>
  );
}

export default UserProfilePopup;
