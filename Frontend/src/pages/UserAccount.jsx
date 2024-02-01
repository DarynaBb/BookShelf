import NavBar from '../components/NavBar'
import UserBooks from '../components/UserBooks'
import UserProfile from '../components/UserProfile'
import { useContext } from 'react';
import { UserProfileContext } from '../context/UserProfileContext';
import { UserBooksContext } from '../context/UserBooksContext';
import { Link } from 'react-router-dom';
import arrow from "../assets/arrow_pagination.svg"

function UserAccount() {
  const {isProfileOpen, setIsProfileOpen } = useContext(UserProfileContext);
  const {isMyBooksOpen, setIsMyBooksOpen, isCurrentlyReading, isWantToRead, isRead, setIsCurrentlyReading, setIsWantToRead, setIsRead} = useContext(UserBooksContext);

  const onClickProfileHandler = () => {
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

  const onClickBooksHandler = () => {
    if (isMyBooksOpen) {
      setIsMyBooksOpen(false);
      setIsCurrentlyReading(false);
      setIsWantToRead(false);
      setIsRead(false);
    } else {
      setIsMyBooksOpen(true);
      setIsProfileOpen(false);
    }
  }

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
          <div className='basis-[20%] flex flex-col gap-[10px]'>
          <h2 className='pt-regular text-[32px]'>Account</h2>
            <h3 className={`${isProfileOpen ? "bg-bg-gray" : ""} cursor-pointer py-[7px]`} onClick={onClickProfileHandler}>Profile</h3>
            <h3 className={`${isMyBooksOpen ? "bg-bg-gray" : ""} cursor-pointer py-[7px]`} onClick={onClickBooksHandler}>My Books</h3>
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
          </div>
          <div className='basis-[75%] justify-center'>
            <UserProfile />
            <UserBooks />
          </div>
        </div>
        
    </section></>
    
  )
}

export default UserAccount