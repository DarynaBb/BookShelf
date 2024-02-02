import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { footerLinks } from '../constants';

function Footer() {
    const location = useLocation();

    const renderlinks = () => {
        return footerLinks.map((link, index) => (
          index === 0 || index === 3 || index === 6 ? (
            <li key={index} className='basis-1/3 text-left mb-[10px]'>
                <a href="">{link.title}</a>
            </li>
          ) : index === 1 || index === 4 || index === 7 ? (
            <li key={index} className='basis-1/3 text-center'>
                <a href="">{link.title}</a>
            </li>
          ) : (
            <li key={index} className='basis-1/3 text-right'>
                <a href="">{link.title}</a>
            </li>
          )
        ));
      }  

  return (
    <footer className={`${location.pathname === "/myBooks" || location.pathname === "/myAccount" ? "bg-bg-gray" : "bg-bg-beige"}`}>
        <div className='max-container padding-container '>
            {/* <div className='text-center mb-[100px]'>
                <Link to="/main" className='uppercase open-sans-bold text-[32px]'>book garden</Link>
            </div> */}
            <div className='flex justify-between items-center'>
                <div className='pt-regular text-[24px] basis-[25%]'>
                    <h4><span className='pt-bold'>Book Garden</span> - where words come alive in bytes.</h4>
                </div>
                <ul className='basis-[70%] flex flex-wrap justify-end' >
                    {renderlinks()}
                </ul>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer