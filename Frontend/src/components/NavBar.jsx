import React from 'react'
import { Link, useLocation } from 'react-router-dom';




function NavBar() {
    const location = useLocation();
  return (
    <header className='max-container padding-container'>
    <nav className='flex w-full justify-between items-center'>
        <ul className='flex gap-[50px] inter-medium items-center'>
            <li className='flex items-center'>
                <Link className='inter-medium' to="/">Discover our garden
                </Link>
            </li>
            <li>
                <Link className='inter-medium' to="/myBooks">My books</Link>
            </li>
        </ul>
        <h1 className='uppercase open-sans-bold text-[32px]'>
            <Link to="/">book garden</Link> 
        </h1>
        <ul className='flex justify-between gap-[50px]'>
            <li>
                <Link className='inter-medium' to="/myAccount">My Account</Link>
            </li>
            <li>
                <button className='inter-medium'>Log out</button>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default NavBar