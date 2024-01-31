import React from 'react'
import { Link } from 'react-router-dom';
import arrow from "../assets/arrow_pagination.svg"

function NavBar() {
  return (
    <nav className='flex w-full justify-between flex-wrap'>
        <ul className='flex gap-[10px]'>
            <li>
                <Link to="/main">Discover our garden</Link>
            </li>
            <li>
                <Link to="/myAccount">My books</Link>
            </li>
        </ul>
        <h1 className='uppercase'>book garden</h1>
        <ul className='flex justify-between gap-[10px]'>
            <li>
                <Link to="/myAccount">My Account</Link>
            </li>
            <li>
                <button>Log out</button>
            </li>
        </ul>
        <div className='basis-[100%] flex '>
            <Link to="/main">main</Link>
            <img src={arrow} alt="" />
            <Link to="/myAccount">account</Link>
        </div>
    </nav>
  )
}

export default NavBar