import React, { useContext, useEffect, useState } from 'react'
import { UserBooksContext } from '../context/UserBooksContext';
import { UserProfileContext } from '../context/UserProfileContext';

function UserBooks() {
  const {getBooks,
    isCurrentlyReading, setIsCurrentlyReading,
    isWantToRead, setIsWantToRead,
    isRead, setIsRead,
    currentlyReading, 
    wantToRead, 
    read,isShelfUpdated, 
    isBookDeleted, changeShelf, deleteBook,
    isMyBooksOpen, setIsMyBooksOpen} = useContext(UserBooksContext);

  const {setIsProfileOpen} = useContext(UserProfileContext);

  
  const onClickHandler = () => {
    if (isMyBooksOpen) {
      setIsMyBooksOpen(false);
      setIsCurrentlyReading(false);
      setIsWantToRead(false);
      setIsRead(false);
    } else {
      setIsMyBooksOpen(true);
      setIsProfileOpen(false);
    }
  }

  useEffect(() => {
    getBooks();
  }, [isShelfUpdated, isBookDeleted])

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
    <section className=''>
      <div className='flex justify-between'>
        <div>
          <h3 onClick={onClickHandler}>My books</h3>
          <ul className='cursor-pointer'>
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