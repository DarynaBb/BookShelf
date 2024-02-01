import React from 'react'
import { Link } from 'react-router-dom';
import arrow from "../assets/arrow_pagination.svg";

function Pagination({path, page}) {
  return (
    <div className='basis-[100%] flex text-[14px] mb-[20px] bg-bg-gray pl-[8px] py-[2px] items-center'>
        <Link to="/main">Main</Link>
        <img src={arrow} alt="" />
        <Link to={path}>{page}</Link>
    </div>
  )
}
export default Pagination