import React, {useState, useContext} from 'react';
import axios from 'axios';
import { UserBooksContext } from '../context/UserBooksContext';
import { UserProfileContext } from '../context/UserProfileContext';

function FormUserData() {
    const { user, userId, isEditing, setIsEditing, setIsUserUpdated } = useContext(UserProfileContext);
    const { url } = useContext(UserBooksContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    
  
    const saveChanges = async (e) => {
        e.preventDefault();
        const axiosUrl = `${url}/user/${userId}`;
      
        try {
          const dataToUpdate = {};
      
          if (firstName.trim() !== "") {
            dataToUpdate.firstName = firstName.trim();
          }
      
          if (lastName.trim() !== "") {
            dataToUpdate.lastName = lastName.trim();
          }
      
          if (email.trim() !== "") {
            dataToUpdate.email = email.trim();
          }
      
          if (photo.trim() !== "") {
            dataToUpdate.photo = photo.trim();
          }
      
          if (Object.keys(dataToUpdate).length > 0) {
            const response = await axios.patch(axiosUrl, dataToUpdate);
            console.log("Server Response:", response.data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoto("");
            setIsUserUpdated(true);
            setIsEditing(false);
            console.log("Yeiii!");
          } else {
            console.log("No fields provided for update.");
          }
        } catch (error) {
          console.error(error);
        }
      };  
  return (
    <form action="" className={`${isEditing? "flex gap-[10px] flex-col mt-[100px]" : "hidden"}`}>
            <div className='flex gap-[2px] flex-col flex-wrap '>
              <label className='' htmlFor="firstName">First Name</label>
              <input placeholder={user && user.firstName ? user.firstName.toUpperCase() : ''} onChange={(e) => setFirstName(e.target.value)} value={firstName} className='outline-bg-gray border-[2px] border-gray-200 py-[10px]' id='firstName' type="text" />
            </div>
            <div className='flex gap-[2px] flex-col flex-wrap  '>
              <label htmlFor="firstName">Last Name</label>
              <input placeholder={user && user.lastName ? user.lastName.toUpperCase() : ''} onChange={(e) => setLastName(e.target.value)} value={lastName} className='outline-bg-gray border-[2px] border-gray-200 py-[10px]' id='lastName' type="text" />
            </div>
           <div className='flex gap-[2px] flex-col flex-wrap'>
              <label htmlFor="email">Email</label>
              <input placeholder={user && user.email ? user.email.toLowerCase() : ''} onChange={(e) => setEmail(e.target.value)} value={email} className='outline-bg-gray border-[2px] border-gray-200 py-[10px]' id='lastName' type="email" />
           </div>
           <div className='flex gap-[2px] flex-col flex-wrap'>
              <label htmlFor="photo">Photo</label>
              <input placeholder="Link to your photo" onChange={(e) => setPhoto(e.target.value)} value={photo} className='outline-bg-gray border-[2px] border-gray-200 py-[10px]' id='lastName' type="text" />
           </div>
           <div className='mt-[40px] flex gap-[10px]'>
            <button className='bg-black py-[20px] w-[210px] text-white' onClick={(e) => saveChanges(e)}>Save</button>
            <button className='bg-black py-[20px] w-[210px] text-white' onClick={(e) => {e.preventDefault(); setIsEditing(false)}}>Close</button>
           </div>
          </form>
  )
}

export default FormUserData