import React, {useContext, useEffect, useState} from 'react'
import { UserProfileContext } from '../context/UserProfileContext';
import { UserBooksContext } from '../context/UserBooksContext';
import UserBooks from '../components/UserBooks';
import NavBar from '../components/NavBar';
import AccountNavigation from '../components/AccountNavigation';
import Pagination from "../components/Pagination";

function MyBooks() {
    const {isMyBooksOpen, setIsMyBooksOpen, isCurrentlyReading, isWantToRead, isRead, setIsCurrentlyReading, setIsWantToRead, setIsRead} = useContext(UserBooksContext);  
    const [navigationItems, setNavigationItems] = useState([
        { type: 'currentlyReading', label: 'Currently reading', isActive: isCurrentlyReading },
        { type: 'wantToRead', label: 'Want to read', isActive: isWantToRead },
        { type: 'read', label: 'Read', isActive: isRead },
      ]);


      const handleNavigationClick = (type) => {
        setNavigationItems((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            isActive: item.type === type,
          }))
        );
        switch (type) {
          case 'currentlyReading':
            setIsCurrentlyReading(true);
            setIsWantToRead(false);
            setIsRead(false);
            break;
          case 'wantToRead':
            setIsCurrentlyReading(false);
            setIsWantToRead(true);
            setIsRead(false);
            break;
          case 'read':
            setIsCurrentlyReading(false);
            setIsWantToRead(false);
            setIsRead(true);
            break;
          default:
            break;
        }
      };

    useEffect(() => {
        setIsMyBooksOpen(true);
        setIsCurrentlyReading(true);
        setIsWantToRead(false);
        setIsRead(false);
    }, [])

    
    
  return (
    <>
        <NavBar />
        <section className='max-container padding-container mb-[150px]'>
        <Pagination path="/myBooks" page="My Books" />
        <div className='flex justify-between'>
            <nav className='basis-[20%]'>
                <AccountNavigation />
                <ul className={`${isMyBooksOpen ? "block mt-[10px]" : "hidden"}`}>
                    {navigationItems.map((item, index) => (
                <li
                    key={index}
                    className={`pl-[70px] flex items-center gap-[8px] cursor-pointer`}
                        onClick={() => handleNavigationClick(item.type)}
                    >
                        <div className={`${item.isActive ? "w-[8px] h-[8px] bg-black rounded-[50%]" : ""}`} />
                        <p>{item.label}</p>
                    </li>
                    ))}
                </ul>
            </nav>
            <div className='basis-[75%]'>
                <UserBooks />
            </div>
        </div>
        </section>
        
    </>
    
  )
}

export default MyBooks

