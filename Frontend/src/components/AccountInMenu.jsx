import React, { useContext, useState } from "react";
import axios from "axios";
import Logout from "./Logout";
import { UserProfileContext } from "../context/UserProfileContext";

function AccountInMenu() {
  const userProfileContext = useContext(UserProfileContext);
  const { userId, url, user } = userProfileContext;
  const [showDetail, setShowDetail] = useState(false);
  const [loading, setLoading] = useState(false);

  const showDetailHandler = () => {
    setShowDetail(!showDetail);
  };

  const showAccountHandler = async (e, field) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const axiosUrl = `${url}/user/${userId}`;

    try {
      if (
        field === "profile" ||
        field === "firstName" ||
        field === "lastName" ||
        field === "email" ||
        field === "photo"
      ) {
        const response = await axios.get(axiosUrl);
        console.log("User found:", response.data);
        // Assuming response.data contains user details, you can update your context or state here
        // Set the user details in your context or state here if needed
      } else {
        console.log("Invalid user");
      }
    } catch (error) {
      console.error(error.message);
    }

    setLoading(false);

    // Toggle the showDetail state after fetching data
    showDetailHandler();
  };

  return (
    <div>
      <div>
        <button onClick={(e) => showAccountHandler(e, "profile")}>
          My Account
        </button>
        {showDetail && (
          <div>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user.email}</p>
          </div>
        )}
      </div>
      <button onClick={() => console.log("My Books clicked")}></button>
    </div>
  );
}

export default AccountInMenu;
