import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserBooksContext = createContext();

const UserBooksContextProvider = ({ children }) => {
    const [userId, setUserId] = useState("65ba24b0cbd9068c6509d1e2");
    const [isCurrentlyReading, setIsCurrentlyReading] = useState(false);
    const [isWantToRead, setIsWantToRead] = useState(false);
    const [isRead, setIsRead] = useState(false);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [read, setRead] = useState([]);
    const [isShelfUpdated, setIsShelfUpdated] = useState(false);
    const [isBookDeleted, setIsBookDeleted] = useState(false);
    const [isMyBooksOpen, setIsMyBooksOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [chosenCurrentlyBook, setChosenCurrentlyBook] = useState([]);
    const [chosenWantToReadBook, setChosenWantToReadBook] = useState([]);
    const [chosenReadBook, setChosenReadBook] = useState([]);
    
    


    const url = "http://localhost:3001";

    const getBooks = async () => {
        try {
          const response = await axios.get(`${url}/${userId}`);
          const currentlyReadingBooks = response.data.filter(book => book.shelfType === "currentlyReading");
          const wantToReadBooks = response.data.filter(book => book.shelfType === "wantToRead"); 
          const readBooks = response.data.filter(book => book.shelfType === "read");
          
          
          setCurrentlyReading(currentlyReadingBooks);
          setWantToRead(wantToReadBooks);
          setRead(readBooks);
          setIsLoading(true);
          setIsShelfUpdated(false);
          setIsBookDeleted(false);
          setIsLoading(true);
  
          console.log('Books:', response.data);
          console.log('Currently Reading Books:', currentlyReadingBooks);
          console.log('Want to read Books:', wantToReadBooks);
          console.log('Read Books:', readBooks);
        } catch (error) {
          console.error("Fehler beim Abrufen der Daten:", error.message);
        }
      }

      const changeShelf = async (event, id) => {
        try {
          setIsShelfUpdated(true);
          const axiosUrl = `${url}/updateBook/${userId}/${id}`;
          await axios.patch(axiosUrl, {
            shelfType: event.target.value
          });
          setChosenCurrentlyBook([]);
          setChosenWantToReadBook([]);
          setChosenReadBook([]);
        } catch (error) {
          console.error('Error updating shelf type:', error.message);
        } 
      };
    
      const deleteBook = async (id, chosenBook) => {
        setIsBookDeleted(true);
        try {
          const axiosUrl = `${url}/deleteBook/${userId}/${id}`
          await axios.delete(axiosUrl);
          chosenBook([]);
        } catch (error) {
          console.error('Error deliting a book:', error.message);
        }
        
      }

    return (
        <UserBooksContext.Provider
            value={{
                getBooks,
                isCurrentlyReading, setIsCurrentlyReading,
                isWantToRead, setIsWantToRead,
                isRead, setIsRead,
                currentlyReading, setCurrentlyReading,
                wantToRead, setWantToRead,
                read, setRead,
                isShelfUpdated, setIsShelfUpdated,
                isBookDeleted, setIsBookDeleted,
                userId, changeShelf, deleteBook,
                isMyBooksOpen, setIsMyBooksOpen, url, isLoading, chosenCurrentlyBook, 
                setChosenCurrentlyBook, chosenWantToReadBook, setChosenWantToReadBook,
                chosenReadBook, setChosenReadBook
            }}
        >
            {children}
        </UserBooksContext.Provider>
    );
}




export { UserBooksContext, UserBooksContextProvider };
