import React, { useContext } from "react";
import leaf from "../assets/leaf.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/LoginContext";
import { UserProfileContext } from "../context/UserProfileContext";
// import MyAccountButton from "./MyAccountButton";
import LoginDropdown from "./LoginDropdown";
import { useEffect, useState } from "react";
import { getCookie } from "../utils/cookie";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const MenuBar = () => {
  const userProfileContext = useContext(UserProfileContext);
  const authContext = useAuth();
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const { loggedin: userProfileLoggedin } = userProfileContext;
  const { isLoggedIn: authLoggedin } = authContext;

  const loggedin = userProfileLoggedin || authLoggedin;
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('token');

    if (token) {
      axios
        .post('/check-web-token', { token: token })
        .then((response) => {
          const { data } = response;
          const { firstName, lastName, userId } = data.userData;

          setUserName(`${firstName} ${lastName}`);
          setUserId(userId);

          if (!data.status) {
            navigate('/');
          }
        })
        .catch((error) => {
          console.error('Error occurred:', error);
        });
    } else {
      navigate('/');
    }
  }, []);

  const handleLogOut = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.clear();
    navigate('/');
  };

  const handleMyAccount = () => {
    navigate(`/myAccount`);
  };

  return (
    <header className='max-container padding-container'>
      <nav className='flex w-full justify-between items-center'>
        <ul className='flex gap-[50px] inter-medium items-center'>
          <li className='flex items-center'>
            <Link className='inter-medium' to='/main'>
              Discover our garden
            </Link>
            <img className='w-[30px]' src={leaf} alt='' />
          </li>
        </ul>
        <h1 className='uppercase open-sans-bold text-[32px]'>book garden</h1>
        <div className='flex items-center px-6 ml-auto lg:ml-0 lg:p-0'>
        <span className='font-bold text-sm '>Hi, {userName}</span>
        <Link
            onClick={handleMyAccount}
            className='text-sm  hover:text-textGreen bg-[#e9a4504c] rounded-md p-1 ml-4'
          >
            My Account
          </Link>
        <Link
            onClick={handleLogOut}
            className='text-sm  hover:text-textGreen bg-[#e9a4504c] rounded-md p-1 ml-4'
          >
            logout
          </Link>
   {/* <MyAccountButton /> */}
         
        </div>
      </nav>
    </header>
  );
};

export default MenuBar;
