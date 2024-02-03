import React, {useContext, useEffect} from 'react'
import { UserProfileContext } from '../context/UserProfileContext';
import UserProfile from '../components/UserProfile';
import NavBar from '../components/NavBar';
import AccountNavigation from '../components/AccountNavigation';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

function MyAccount() {
    const {setIsProfileOpen } = useContext(UserProfileContext);

    useEffect(() => {
        setIsProfileOpen(true);
    }, [])

  return (
    <>
    <NavBar />
    <section className='min-h-screen flex flex-col'>
        <div className='max-container padding-container mb-[100px] w-full'>
            <Pagination path='/myAccount' page="Profile" />
            <div className='flex justify-between padding-[100px]'>
                <div className='basis-[20%]'>
                    <AccountNavigation />
                </div>
                <div className='basis-[75%]'>
                    <UserProfile />
                </div>
            </div> 
        </div>
        <div className='mt-auto'>
            <Footer />
        </div>
    </section>
    </>
    
    
  )
}

export default MyAccount