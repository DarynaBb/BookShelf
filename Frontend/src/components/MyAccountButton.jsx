import React, { useState } from "react";
import SignUp from "./SignUp"; 
import SignIn from "./SignIn";
import LogIn from "./LogIn";

const MyAccountButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {!isOpen && (
        <button
          onClick={toggleDropdown}
          className='bg-gray-200 text-gray-800 text-lg px-4 py-2 hover:shadow-md'
        >
          My Account
        </button>
      )}
      {isOpen && <LogIn />}
    </div>
  );
};

export default MyAccountButton;
