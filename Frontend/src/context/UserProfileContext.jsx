import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserProfileContext = createContext();

const UserProfileContextProvider = ({ children }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState("65ba24b0cbd9068c6509d1e2");
    const url = "http://localhost:3001";
    const [user, setUser] = useState({});

    const getUserData = async() => {
        const axiosUrl = `${url}/user/${userId}`;
        try {
            const response = await axios.get(axiosUrl);
            setUser(response.data);
            console.log(response.data);
            setIsLoading(true);
        } catch (error) {
            console.error(error);
        }
    }

return (
    <UserProfileContext.Provider
        value={{isProfileOpen, setIsProfileOpen,
            getUserData, isLoading, user, userId
            
        }}
    >
        {children}
    </UserProfileContext.Provider>
);
}




export { UserProfileContext, UserProfileContextProvider };
