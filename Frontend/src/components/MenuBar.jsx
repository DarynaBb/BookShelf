import SignUp from '../pages/SignUp';

import React from 'react'
import { Link } from 'react-router-dom';
import leaf from "../assets/leaf.jpg"

const MenuBar = () => {
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
            <SignUp/>
      </div>
    </nav>
    </header>
  )
};



export default MenuBar;