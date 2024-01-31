import React from 'react';
import  axios  from 'axios';
import backendUrl from '../config/config';

const Logout = () => {
    const logoutHandler = async (e) => {
        e.preventDefault();
    
        try {
          const resp = await axios.post(`${backendUrl}/logout`, {}, { withCredentials: true });
          console.log("you are logout!", resp.data);
      
        } catch (error) {
          console.log(error.message);
        }
      }
    return (
        <div>
           <button onClick={logoutHandler}>LOGOUT</button>
        </div>
    );
};

export default Logout;
