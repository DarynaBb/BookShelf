import React, { useEffect, useState } from 'react'
import axios from "axios";

function UserBooks() {
  const [isMyBooksOpen, setIsMyBooksOpen] = useState(false);
  const [isCurrentlyReading, setIsCurrentlyReading] = useState(false);
  const [isWantToRead, setIsWantToRead] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookId, setBookId] = useState("[]");
  const [userId, setUserId] = useState("65b8bf773d6e0e7e01437d8b");
  const [users, setUsers] = useState([]);
  const [isShelfUpdated, setIsShelfUpdated] = useState(false);
  const [isBookDeleted, setIsBookDeleted] = useState(false);


  const getAllBooksUrl = `http://localhost:3001/${userId}`;
  
  
  const onUlClickHandler = () => {
    if (isMyBooksOpen) {
      setIsMyBooksOpen(false);
      setIsCurrentlyReading(false);
      setIsWantToRead(false);
      setIsRead(false);
    } else {
      setIsMyBooksOpen(true);
    }
  }

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(getAllBooksUrl);

        const currentlyReadingBooks = response.data.filter(book => book.shelfType === "currentlyReading");
        const wantToReadBooks = response.data.filter(book => book.shelfType === "wantToRead"); 
        const readBooks = response.data.filter(book => book.shelfType === "read");
        
        setCurrentlyReading(currentlyReadingBooks);
        setWantToRead(wantToReadBooks);
        setRead(readBooks);
        setIsLoading(true);
        setIsShelfUpdated(false);
        setIsBookDeleted(false);

        console.log('Books:', response.data);
        console.log('Currently Reading Books:', currentlyReadingBooks);
        console.log('Want to read Books:', wantToReadBooks);
        console.log('Read Books:', readBooks);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error.message);
      }
    }
    getBooks();

  }, [isShelfUpdated, isBookDeleted])

  const changeShelf = async (event, id) => {
    try {
      setIsShelfUpdated(true);
      const url = `http://localhost:3001/updateBook/${userId}/${id}`;
      await axios.patch(url, {
        shelfType: event.target.value
      });
    } catch (error) {
      console.error('Error updating shelf type:', error.message);
    } 
  };

  const deleteBook = async (id) => {
    setIsBookDeleted(true);
    try {
      const url = `http://localhost:3001/deleteBook/${userId}/${id}`
      await axios.delete(url);
    } catch (error) {
      console.error('Error deliting a book:', error.message);
    }
    
  }

  const showCurrentlyReading = () => {
    setIsCurrentlyReading(true);
    setIsWantToRead(false);
    setIsRead(false);
  }

  const showRead = () => {
    setIsCurrentlyReading(false);
    setIsWantToRead(false);
    setIsRead(true);
  }

  const showWantToRead = () => {
    setIsCurrentlyReading(false);
    setIsWantToRead(true);
    setIsRead(false);
  }

  return (
    <section className='p-[30px]'>
      <div className='flex justify-around'>
        <div>
          <h2>Account</h2>
          <p>Profile</p>
          <ul className='cursor-pointer'>
            <li onClick={onUlClickHandler}>My books</li>
            {isMyBooksOpen ? 
            (
            <ul>
              <li className='pl-[20px]' onClick={showCurrentlyReading}>Currently reading</li>
              <li className='pl-[20px]' onClick={showWantToRead}>Want to read</li>
              <li className='pl-[20px]' onClick={showRead}>Read</li>
            </ul>)
          : 
          ""}
          </ul>
        </div>
        <div>
              {isCurrentlyReading ? 
              (<ul>
                <li>
                  <p>Currently Reading</p>
                  <p>{currentlyReading.length} {currentlyReading.length > 1 || currentlyReading.length === 0 ? "books" : "book" }</p>
                </li>
                {currentlyReading.map(book => (
                  <li key={book.book._id} className='border-black border-[2px]'>
                    <p>{currentlyReading.length} books</p>
                    <p>{book.book.title}</p>
                    <p>{book.book.author}</p>
                    <select onChange={(e) => changeShelf(e, book.book._id)} name="" id="">
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want To Read</option>
                      <option value="read">Read</option>
                    </select>
                    <button onClick={() => deleteBook(book.book._id)}>Delete</button>
                  </li>
                )) }
              </ul>) : ""}
              {isWantToRead ? 
              (<ul>
                <li>
                  <p>Want To Read</p>
                  <p>{wantToRead.length} {wantToRead.length > 1 || wantToRead.length === 0 ? "books" : "book" }</p>
                </li>
                {wantToRead.map(book => (
                  <li key={book.book._id} className='border-black border-[2px]'>
                    <p>{book.book.title}</p>
                    <p>{book.book.author}</p>
                    <select onChange={(e) => changeShelf(e, book.book._id)} name="" id="" defaultValue={book.shelfType}>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want To Read</option>
                      <option value="read">Read</option>
                    </select>
                    <button onClick={() => deleteBook(book.book._id)}>Delete</button>
                  </li>
                )) }
              </ul>) : ""}
              {isRead ? 
              (<ul>
                <li>
                <p>Read</p>
                  <p>{read.length} {read.length > 1 || read.length === 0 ? "books" : "book" }</p> 
                </li>
                {read.map(book => (
                    <li key={book.book._id} className='border-black border-[2px]'>
                      <p>{book.book.title}</p>
                      <p>{book.book.author}</p>
                      <select onChange={(e) => changeShelf(e, book.book._id)} name="" id="" defaultValue={book.shelfType}>
                      <option value="currentlyReading">Read</option>
                      <option value="wantToRead">Want To Read</option>
                      <option value="read">Currently Reading</option>
                    </select>
                    <button onClick={() => deleteBook(book.book._id)}>Delete</button>
                    </li>
                  )) }
              </ul>) : ""}
        </div>
      </div>
    </section>
  )
}

export default UserBooks