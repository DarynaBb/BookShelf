import React, { useContext, useEffect, useState } from 'react'
import { UserProfileContext } from '../context/UserProfileContext';
import UserData from './UserData';
import FormUserData from './FormUserData';

function UserProfile() {
  const {isProfileOpen,  getUserData, isUserUpdated, setIsUserUpdated } = useContext(UserProfileContext);
  
  useEffect(() => {
    getUserData();
    setIsUserUpdated(false);
  }, [isUserUpdated])

 

  const updateUserField = async (e, field) => {
    e.preventDefault();
    const axiosUrl = `${url}/user/${userId}`;
  
    try {
      if (field === "firstName" || field === "lastName" || field === "email" || field === "photo") {
        const dataToUpdate = { [field]: eval(field) }; // Using eval to access dynamic variable
        await axios.patch(axiosUrl, dataToUpdate);
        setFirstName(""); 
        setLastName("");
        setEmail("");
        setPhoto("");
        setIsUserUpdated(true);
        console.log("Yeiii!");
      } else {
        console.log("Invalid field provided. No update performed.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <section className=''>
      <div className='flex justify-between'>
        <div className={`${isProfileOpen ? "block" : "hidden"} w-full`}>
          <h2 className="block pt-regular text-[32px] mb-[20px]">Profile</h2>
          <div className='flex flex-col'>
            <div className='w-[60%]'>
              <UserData />
            </div>
          <div className='w-[60%]'>
            <FormUserData />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile