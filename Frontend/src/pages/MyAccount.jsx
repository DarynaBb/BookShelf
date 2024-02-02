import React, {useContext, useEffect} from 'react'
import { UserProfileContext } from '../context/UserProfileContext';
import UserProfile from '../components/UserProfile';
import NavBar from '../components/NavBar';
import AccountNavigation from '../components/AccountNavigation';
import Pagination from '../components/Pagination';

function MyAccount() {
    const {setIsProfileOpen } = useContext(UserProfileContext);

    useEffect(() => {
        setIsProfileOpen(true);
    }, [])

  return (
    <>
    <NavBar />
    <section className='max-container padding-container mb-[100px]'>
        <Pagination path='/myAccount' page="Profile" />
        <div className='flex justify-between'>
            <div className='basis-[20%]'>
                <AccountNavigation />
            </div>
            <div className='basis-[75%]'>
                <UserProfile />
            </div>
        </div> 
    </section>
    </>
    
    
  )
}

export default MyAccount