import React, { useContext, useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
import { UserProfileContext } from '../context/UserProfileContext';

function AccountInMenu() {
  const userProfileContext = useContext(UserProfileContext);
  const { userId, url, user } = userProfileContext;
  const [showDetail, setShowDetail] = useState(false);

  const showDetailHandler = () => {
    setShowDetail(!showDetail);
  };

  const showAccountHandler = async (e, field) => {
    e.preventDefault();
    const axiosUrl = `${url}/user/${userId}`;

    try {
      if (field === 'firstName' || field === 'lastName' || field === 'email' || field === 'photo') {
        const response = await axios.get(axiosUrl);
        console.log("User found:", response.data);
        // You can set the user details in your context or state here if needed
      } else {
        console.log('Invalid user');
      }
    } catch (error) {
      console.error(error.message);
    }

    // Toggle the showDetail state after fetching data
    showDetailHandler();
  };

  return (
    <div onClick={(e) => showAccountHandler(e, 'profile')}>
     
        <div >
          <button onClick={showDetailHandler}>
            {showDetail && (
              <div>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
              </div>
            )}
          </button>
          <button onClick={() => console.log('My Books clicked')}></button>
        </div>

    </div>
  );
}

export default AccountInMenu;
