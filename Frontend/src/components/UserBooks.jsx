import React, { useContext, useEffect, useState } from 'react'
import { UserBooksContext } from '../context/UserBooksContext';

function UserBooks() {
  const {getBooks,
    isCurrentlyReading, setIsCurrentlyReading,
    isWantToRead, setIsWantToRead,
    isRead, setIsRead,
    currentlyReading, 
    wantToRead, 
    read,isShelfUpdated, 
    isBookDeleted, changeShelf, deleteBook,
    isMyBooksOpen} = useContext(UserBooksContext);


  useEffect(() => {
    getBooks();
  }, [isShelfUpdated, isBookDeleted])

  
  return (
    <section className=''>
      <h2 className={isMyBooksOpen ? "block pt-regular text-[32px]" : "hidden"}>My Books</h2>
      <div>
          {isCurrentlyReading ? 
            (<ul>
              <li className=''>
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
          </ul>) : 
        ""}
      </div>
    </section>
  )
}

export default UserBooks