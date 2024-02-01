import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'

function AccountNavigation() {
  const location = useLocation();  


  return (
        <ul className='flex flex-col gap-[10px]'>
            <li className={location.pathname === "/myAccount" ? "bg-bg-gray" : ""}>
                <NavLink to="/myAccount" className="p-[8px]">Profile</NavLink>
            </li>
            <li className={location.pathname === "/myBooks" ? "bg-bg-gray" : ""}>
                <NavLink className="p-[8px]" to="/myBooks">My Books</NavLink>   
            </li>
        </ul> 
  )
}

export default AccountNavigation