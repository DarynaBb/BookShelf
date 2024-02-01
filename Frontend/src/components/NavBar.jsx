import React from 'react'
import { Link } from 'react-router-dom';
import leaf from "../assets/leaf.jpg"

function NavBar() {
  return (
    <header className='max-container padding-container'>
    <nav className='flex w-full justify-between items-center'>
        <ul className='flex gap-[50px] inter-medium items-center'>
            <li className='flex items-center'>
                <Link className='inter-medium' to="/main">Discover our garden
                </Link>
                <img className='w-[30px]' src={leaf} alt="" />
            </li>
            <li>
                <Link className='inter-medium' to="/myAccount">My books</Link>
            </li>
        </ul>
        <h1 className='uppercase open-sans-bold text-[32px]'>book garden</h1>
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