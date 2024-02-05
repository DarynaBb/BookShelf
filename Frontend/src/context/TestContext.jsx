import { createContext, useState, useEffect } from "react";
import axios from "axios";

const TestContext = createContext();

const TestContextProvider = ({ children }) => {
    const [userId, setUserId] = useState("65ba24b0cbd9068c6509d1e2");
    
    const [searchRequest, setSearchRequest] = useState("");
    
    
    const url = "http://localhost:3001";

    

    return (
        <TestContext.Provider
            value={{
                searchRequest,userId, setSearchRequest, url
            }}
        >
            {children}
        </TestContext.Provider>
    );
}




export { TestContext, TestContextProvider };
