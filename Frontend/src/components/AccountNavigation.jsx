import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'

function AccountNavigation() {
  const location = useLocation();  


  return (
    <>
    <h2 className='pt-regular text-[32px] mb-[20px]'>Account</h2>
        <ul className='flex flex-col gap-[10px]'>
            <li className={location.pathname === "/myAccount" ? "bg-bg-gray" : ""}>
                <NavLink to="/myAccount" className="inline-block py-[3px]">Profile</NavLink>
            </li>
            <li className={location.pathname === "/myBooks" ? "bg-bg-gray" : ""}>
                <NavLink className="inline-block py-[3px]" to="/myBooks">My Books</NavLink>   
            </li>
        </ul> 
    </>    
  )
}

export default AccountNavigation