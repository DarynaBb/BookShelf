import React, { useContext, useEffect } from 'react';
import { UserBooksContext } from '../context/UserBooksContext';
import star from "../assets/star24Px.svg"

function UserBooks() {
  const {
    getBooks,
    isCurrentlyReading,
    setIsCurrentlyReading,
    isWantToRead,
    setIsWantToRead,
    isRead,
    setIsRead,
    currentlyReading,
    wantToRead,
    read,
    isShelfUpdated,
    isBookDeleted,
    changeShelf,
    deleteBook,
    isMyBooksOpen
  } = useContext(UserBooksContext);

  useEffect(() => {
    getBooks();
  }, [isShelfUpdated, isBookDeleted]);

  const renderBookList = (books, shelfType) => (
    <ul className=''>
  <li>
    <p className='pt-regular text-[32px] mb-[24px]'>{shelfType} ({books.length} {books.length !== 1 ? "books" : "book"})</p>
  </li>
  {books.map((book, index) => (
    index === 0 ? (
      <li key={index} className='mb-[45px]'>
        <div className='flex justify-between'>
          <img className='max-w-[286px]' src={book.book.image} alt="" />
          <div className='flex flex-col justify-between'>
            <div>
              <p className='inter-semi-bold text-[20px]'>{book.book.title}</p>
              <p>by {book.book.author}</p>
              <p className='pt-regular'>{book.book.description}</p>
            </div>
            <div className='flex gap-[10px]'>
              <select className='bg-black text-white py-[20px] px-[50px]' onChange={(e) => changeShelf(e, book.book._id)} name="" id="" defaultValue={book.shelfType}>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want To Read</option>
                <option value="read">Read</option>
              </select>
              <button className='bg-black text-white py-[20px] px-[75px]' onClick={() => deleteBook(book.book._id)}>Delete</button>
            </div>
          </div>
        </div>
        <div className='flex mt-[20px] gap-[5px] items-center'>
            <p>{book.book.averageRating}</p>
            <img src={star} alt="" />
          </div>
      </li>
    ) : (
      <li key={book.book._id} className='flex mb-[20px] gap-[20px]'>
        <img className='max-w-[160px]' src={book.book.image} alt="" />
        <div className='flex flex-col gap-[10px]'>
        <p>{book.book.title}</p>
        <p>{book.book.author}</p>
        <p>{book.book.description}</p>
        <select onChange={(e) => changeShelf(e, book.book._id)} name="" id="" defaultValue={book.shelfType}>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want To Read</option>
          <option value="read">Read</option>
        </select>
        <button onClick={() => deleteBook(book.book._id)}>Delete</button>
        </div>
        
      </li>
    )
  ))}
</ul>

  );

  return (
    <section className=''>
      <h2 className={isMyBooksOpen ? "block pt-regular text-[32px]" : "hidden"}>My Books</h2>
      <div className='mt-[45px]'>
        {isCurrentlyReading && renderBookList(currentlyReading, "Currently Reading")}
        {isWantToRead && renderBookList(wantToRead, "Want To Read")}
        {isRead && renderBookList(read, "Read")}
      </div>
    </section>
  );
}

export default UserBooks;
