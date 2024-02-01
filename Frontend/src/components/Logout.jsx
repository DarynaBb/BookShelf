import { useState } from "react";
import axios from "axios";
import backendUrl from "../config/config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext";

const Logout = () => {
  const [showExit, setShowExit] = useState(false);
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();
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
        navigate("/");
        login(false)
        // Additional logic or redirect the user if needed
      } else {
        console.log("Error while logging out");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {showExit ? (
        <p>You have been successfully logged out!</p>
      ) : (
        <button type='button' onClick={logoutHandler}>
          Log out
        </button>
      )}
    </div>
  );
};

export default Logout;
