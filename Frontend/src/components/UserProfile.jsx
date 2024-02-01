import React, { useContext, useEffect, useState } from 'react'
import { UserProfileContext } from '../context/UserProfileContext';
import { UserBooksContext } from '../context/UserBooksContext';
import axios from 'axios';

function UserProfile() {
  const {isProfileOpen, setIsProfileOpen, getUserData, isLoading, user, userId } = useContext(UserProfileContext);
  const {setIsMyBooksOpen, setIsCurrentlyReading, setIsWantToRead, setIsRead, url } = useContext(UserBooksContext);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [isEditing, setIsEditing] = useState(false);
   

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
          <h2 className="block pt-bold text-[32px]">Profile</h2>
          <div className='flex justify-center gap-[20px]'>
            <div className='flex items-center flex-col gap-[16px] mb-[40px]'>
              <img className='max-w-[210px]' src={user.photo} alt="user photo" />
              <button onClick={() => setIsEditing(prevState => !prevState)} className='bg-black py-[20px] w-[210px] text-white'>EDIT</button>
            </div>
            <div className='mt-[30px]'>
              {isLoading ? (
                  <>
                    <p className='uppercase'>{user.firstName}</p>
                    <p className='uppercase'>{user.lastName}</p>
                    <p className='uppercase'>{user.email}</p>
                    <p>Books in colection: {user.favoriteBooks.length}</p>
                  </>
              ) 
              : (<p>Is Loading...</p>)}
            </div>
          </div>
          <form action="" className={`${isEditing? "flex justify-center gap-[10px] flex-col" : "hidden"}`}>
            <div className='flex gap-[10px] flex-col flex-wrap items-center basis-[40%]'>
              <label className='' htmlFor="firstName">First Name</label>
              <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className='border-[2px] border-gray-200' id='firstName' type="text" />
              <button onClick={(e) => updateUserField(e, "firstName")} className=' bg-black text-white px-[10px]'>Edit your first name</button>
            </div>
            <div className='flex gap-[10px] flex-col flex-wrap items-center basis-[40%]'>
              <label htmlFor="firstName">Last Name</label>
              <input onChange={(e) => setLastName(e.target.value)} value={lastName} className='border-[2px] border-gray-200' id='lastName' type="text" />
              <button onClick={(e) => updateUserField(e, "lastName")} className=' bg-black text-white px-[10px]'>Edit your last name</button>
            </div>
           <div className='flex gap-[10px] flex-col flex-wrap items-center basis-[40%]'>
              <label htmlFor="email">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='border-[2px] border-gray-200' id='lastName' type="email" />
              <button onClick={(e) => updateUserField(e, "email")} className=' bg-black text-white px-[10px]'>Edit your email</button>
           </div>
           <div className='flex gap-[10px] flex-col flex-wrap items-center basis-[40%]'>
              <label htmlFor="photo">Photo</label>
              <input onChange={(e) => setPhoto(e.target.value)} value={photo} className='border-[2px] border-gray-200' id='lastName' type="email" />
              <button onClick={(e) => updateUserField(e, "photo")} className=' bg-black text-white px-[10px]'>Edit your photo</button>
           </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile