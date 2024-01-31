import React from 'react'
import { Link } from 'react-router-dom';
import arrow from "../assets/arrow_pagination.svg"
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
    <div className='basis-[100%] flex text-[14px] mt-[50px] bg-bg-gray'>
        <Link to="/main">Main</Link>
        <img src={arrow} alt="" />
        <Link to="/myAccount">Account</Link>
    </div>
    </header>
  )
}

export default NavBar