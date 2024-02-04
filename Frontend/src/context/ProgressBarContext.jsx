import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";


const ProgressBarContext = createContext();

const ProgressBarContextProvider = ({ children }) => {
    const [userId] = useState("65ba24b0cbd9068c6509d1e2");
    
    
    const [progressValue, setProgressValue] = useState(0);
    const url = "http://localhost:3001";


    // const updateProgress = async () => {
    //     const bookId = chosenCurrentlyBook[0].book._id;
    //     console.log("BookId",bookId);
    //     try {
    //       const axiosUrl = `${url}/updateBook/${userId}/${bookId}`;
    //       await axios.patch(axiosUrl, {
    //         progress: progressValue
    //       });
    //       console.log("Uiii!")
    //     } catch (error) {
    //       console.error('Error updating progress:', error.message);
    //     } 
    //   };


    return (
        <ProgressBarContext.Provider
            value={{
                
            }}
        >
            {children}
        </ProgressBarContext.Provider>
    );
}




export { ProgressBarContext, ProgressBarContextProvider };
