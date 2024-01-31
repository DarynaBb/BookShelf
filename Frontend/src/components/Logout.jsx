import { useState } from "react";
import axios from "axios";
import backendUrl from "../config/config";

const Logout = () => {
  const [showExit, setShowExit] = useState(false);
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        `${backendUrl}/logout`,
        {},
        { withCredentials: true }
      );
  
      if (resp.status === 200) {
        console.log("You are logged out!", resp.data);
        setShowExit(true);
      } else {
        console.log("Error while logging out");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div>
      {showExit && (
        <div className='size-96 rounded-md bg-gradient-to-r from-blue-500 to-transparent '></div>
      )}
      <button onClick={logoutHandler}>LOGOUT</button>
    </div>
  );
};

export default Logout;
