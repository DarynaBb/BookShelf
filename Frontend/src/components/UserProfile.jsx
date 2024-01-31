import React, { useContext, useEffect, useState } from 'react'
import userPic from "../assets/userPic.jpg";
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



  useEffect(() => {
    getUserData();
    console.log(email, firstName, lastName)
  }, [email, firstName, lastName])

  const onClickHandler = () => {
    if(isProfileOpen) {
      setIsProfileOpen(false);
    } else {
      setIsProfileOpen(true);
      setIsMyBooksOpen(false);
      setIsCurrentlyReading(false);
      setIsWantToRead(false);
      setIsRead(false);
    }
  }

  const updateUserData = async (e) => {
    e.preventDefault();
    const newUserData = {
      firstName: firstName,
      lastName: lastName,
      email: email
    }

    const axiosUrl = `${url}/user/${userId}`;
    try {
      await axios.patch(axiosUrl, newUserData);
      setIsUserUpdated(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      console.log("Yeiii!")
    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <section className='p-[30px]'>
      <div className='flex justify-between'>
        <h3 className='cursor-pointer' onClick={onClickHandler}>Profile</h3>
        <div className={`${isProfileOpen ? "block" : "hidden"} w-full`}>
          <div className='flex justify-center gap-[20px]'>
            <div className='flex items-center flex-col gap-[16px] mb-[40px]'>
              <img className='max-w-[210px]' src={userPic} alt="user photo" />
              <button className='bg-black py-[20px] w-[210px] text-white'>EDIT</button>
            </div>
            <div className='mt-[30px]'>
              {isLoading ? (
                  <>
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                    <p>{user.email}</p>
                  </>
              ) 
              : (<p>Is Loading...</p>)}
            </div>
          </div>
          <form action="" className='flex justify-center gap-[10px] flex-col'>
            <div className='flex gap-[10px] flex-col flex-wrap items-center basis-[40%]'>
              <label className='' htmlFor="firstName">First Name</label>
              <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className='border-[2px] border-gray-200' id='firstName' type="text" />
              <button onClick={(e) => updateUserData(e)} className=' bg-black text-white px-[10px]'>Edit your first name</button>
            </div>
            <div className='flex gap-[10px] flex-col flex-wrap items-center basis-[40%]'>
              <label htmlFor="firstName">Last Name</label>
              <input onChange={(e) => setLastName(e.target.value)} value={lastName} className='border-[2px] border-gray-200' id='lastName' type="text" />
              <button onClick={updateUserData} className=' bg-black text-white px-[10px]'>Edit your last name</button>
            </div>
           <div className='flex gap-[10px] flex-col flex-wrap items-center basis-[40%]'>
              <label htmlFor="email">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='border-[2px] border-gray-200' id='lastName' type="email" />
              <button onClick={updateUserData} className=' bg-black text-white px-[10px]'>Edit your email</button>
           </div>
            
            
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile