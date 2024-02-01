import React, {useContext, useEffect} from 'react'
import { UserProfileContext } from '../context/UserProfileContext';
import { UserBooksContext } from '../context/UserBooksContext';
import UserProfile from '../components/UserProfile';
import NavBar from '../components/NavBar';
import { Link, NavLink } from 'react-router-dom';
import arrow from "../assets/arrow_pagination.svg"

function MyAccount() {
    const {setIsProfileOpen } = useContext(UserProfileContext);

    useEffect(() => {
        setIsProfileOpen(true);
    }, [])
  return (
    <>
    <NavBar />
    <section className='max-container padding-container'>
        <div className='basis-[100%] flex text-[14px] mb-[20px] bg-bg-gray'>
            <Link to="/main">Main</Link>
            <img src={arrow} alt="" />
            <Link to="/myAccount">Account</Link>
        </div>
        <div className='flex justify-between'>
            <nav>
                <NavLink to="/myAccount" className={(isActive) => (isActive ? "bg-bg-gray" : "")}>
                    {({ isActive }) => (
                        <div className={isActive ? "w-[9px] h-[9px] bg-black rounded-[50%]" : "hidden"} />
                    )}
                    <p>Profile</p>
                </NavLink>
                <NavLink to="/myBooks" className={(isActive) => (isActive ? "bg-bg-gray" : "")}>
                    {({ isActive }) => (
                        <div className={isActive ? "w-[9px] h-[9px] bg-black rounded-[50%]" : "hidden"} />
                    )}
                    <p>My Books</p>
                </NavLink>
            </nav>
            <div className='basis-[75%]'>
                <UserProfile />
            </div>
             
        </div>
        
    </section>
    </>
    
    
  )
}

export default MyAccount