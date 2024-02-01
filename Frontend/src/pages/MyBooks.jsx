import React, {useContext, useEffect} from 'react'
import UserAccount from './UserAccount';
import { UserProfileContext } from '../context/UserProfileContext';
import { UserBooksContext } from '../context/UserBooksContext';
import UserBooks from '../components/UserBooks';
import NavBar from '../components/NavBar';
import { Link, NavLink } from 'react-router-dom';
import arrow from "../assets/arrow_pagination.svg"

function MyBooks() {
    const {isProfileOpen, setIsProfileOpen } = useContext(UserProfileContext);
    const {isMyBooksOpen, setIsMyBooksOpen, isCurrentlyReading, isWantToRead, isRead, setIsCurrentlyReading, setIsWantToRead, setIsRead} = useContext(UserBooksContext);  

    const showCurrentlyReading = () => {
        setIsCurrentlyReading(true);
        setIsWantToRead(false);
        setIsRead(false);
      }
    
      const showRead = () => {
        setIsCurrentlyReading(false);
        setIsWantToRead(false);
        setIsRead(true);
      }
    
      const showWantToRead = () => {
        setIsCurrentlyReading(false);
        setIsWantToRead(true);
        setIsRead(false);
      }

    useEffect(() => {
        setIsMyBooksOpen(true);
        setIsCurrentlyReading(true);
        setIsWantToRead(false);
        setIsRead(false);
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
            <ul className={`${isMyBooksOpen ? "block" : "hidden"}`}>
              <li className={`pl-[70px] flex items-center gap-[8px] cursor-pointer`} onClick={showCurrentlyReading}>
                <div className={`${isCurrentlyReading ? "w-[10px] h-[10px] bg-black rounded-[50%]" : ""}`}/>
                <p>Currently reading</p>
                </li>
              <li className='pl-[70px] flex items-center gap-[8px] cursor-pointer' onClick={showWantToRead}>
                <div className={`${isWantToRead ? "w-[10px] h-[10px] bg-black rounded-[50%]" : ""}`}/>
                <p>Want to read</p>
              </li>
              <li className='pl-[70px] flex items-center gap-[8px] cursor-pointer' onClick={showRead}>
                <div className={`${isRead ? "w-[10px] h-[10px] bg-black rounded-[50%]" : ""}`}/>
                <p>Read</p>
              </li>
            </ul>
        </nav>
        <UserBooks />
        </section>
        
    </>
    
  )
}

export default MyBooks