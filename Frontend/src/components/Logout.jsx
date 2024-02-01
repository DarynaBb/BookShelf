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
      <button
        onClick={logoutHandler}
        className='bg-gray-200 text-gray-800 mr-10 text-lg px-4 py-2 hover:shadow-md'
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Logout;
