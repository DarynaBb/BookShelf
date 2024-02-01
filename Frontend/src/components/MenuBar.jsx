import React, { useContext } from 'react';
import Logout from "./Logout";
import leaf from "../assets/leaf.jpg"
import { Link } from "react-router-dom";
import AccountInMenu from "./AccountInMenu";
import SignUp from "../pages/SignUp";
import { useAuth } from "../context/LoginContext";
import { UserProfileContext } from "../context/UserProfileContext";

const MenuBar = () => {
  const userProfileContext = useContext(UserProfileContext);
  const authContext = useAuth();

  const { loggedin: userProfileLoggedin } = userProfileContext;
  const { isLoggedIn: authLoggedin } = authContext;

  const loggedin = userProfileLoggedin || authLoggedin;
  return (
        <header className='max-container padding-container'>
        <nav className='flex w-full justify-between items-center'>
            <ul className='flex gap-[50px] inter-medium items-center'>
                <li className='flex items-center'>
                    <Link className='inter-medium' to="/main">Discover our garden
                    </Link>
                    <img className='w-[30px]' src={leaf} alt="" />
                </li>
            </ul>
            <h1 className='uppercase open-sans-bold text-[32px]'>book garden</h1>
            <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
            {loggedin ? (
          <SignUp />
        ) : (
          <>
          <div className='cursor-pointer flex gap-5'>My Account <AccountInMenu />
            
            <Logout /></div>
          </>
        )}
          </div>
        </nav>
        </header>
      )
    };
    
    export default MenuBar;
           
   

             



