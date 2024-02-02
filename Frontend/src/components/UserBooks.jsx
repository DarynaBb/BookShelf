import React, { useContext, useEffect, useState } from 'react';
import { UserBooksContext } from '../context/UserBooksContext';
import star from "../assets/star24Px.svg"
import arrow from "../assets/arrowForward.svg"

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
    isMyBooksOpen, isLoading, chosenCurrentlyBook, setChosenCurrentlyBook
  } = useContext(UserBooksContext);
  
  useEffect(() => {
    getBooks();
  }, [isShelfUpdated, isBookDeleted]);

  useEffect(() => {
    if (isLoading && currentlyReading.length > 0) {
      const book = currentlyReading.filter((book, index) => index === 0);
      setChosenCurrentlyBook(book);
      console.log("BOOK", chosenCurrentlyBook)
    }  
  },[])

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const onClickHandler = (title) => {
    const book = currentlyReading.filter((book) => book.book.title === title);
    setChosenCurrentlyBook(book);
  };

  return (
    <section className=''>
      <h2 className={isMyBooksOpen ? "block pt-regular text-[32px] mb-[24px]" : "hidden"}>My Books</h2>

      {isCurrentlyReading ? (
        <>
        {chosenCurrentlyBook?.map(book => (
          <div key={book.book._id} className='mb-[45px]'>
          <div className='flex justify-between'>
            <img className='max-w-[286px]' src={book.book.image} alt="" />
            <div className='flex flex-col justify-between'>
              <div>
                <p className='inter-semi-bold text-[20px]'>{book.book.title}</p>
              <p>by {book.book.author}</p>
              <p className='pt-regular mt-[20px]'>{book.book.description}</p>
            </div>
            <div className='flex justify-between gap-[20px]'>
              <div className='flex items-start gap-[5px]'>
                <p className='inter-semi-bold text-[14px]'>Move to:</p>
                <select className='text-[14px] outline-bg-gray' onChange={(e) => changeShelf(e, book.book._id)} name="" id="" defaultValue={book.shelfType}>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want To Read</option>
                  <option value="read">Read</option>
                </select>
              </div>
              <button className='bg-black text-white py-[20px] px-[75px]' onClick={() => deleteBook(book.book._id)}>Delete book</button>
           </div>
          </div>
          </div>
          <div className='flex mt-[20px] justify-between items-center max-w-[286px]'>
            <div className='flex gap-[5px] items-center'>
              <p>{book.book.averageRating}</p>
              <img src={star} className='w-[20px]' alt="" />
            </div>
            <p>58%</p>
          </div>
          </div> 
        ))}   
        <div className='flex justify-between items-center'>
          <div>
            <img src={arrow} className='rotate-180 opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} alt="" />
          </div>
          <ul id='slider' className='flex gap-[20px] max-w-[700px] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
            {currentlyReading?.map((book, index) => (
              <li onClick={() => onClickHandler(book.book.title)} key={book.book._id} className='flex flex-col gap-[20px] cursor-pointer '>
                <img className='max-w-[160px]  h-full object-cover hover:-translate-y-3 ease-in-out duration-500' src={book.book.image} alt="" />
                <div className='flex mt-[10px] justify-between items-center'>
                  <div className='flex gap-[5px] items-center'>
                    <p>{book.book.averageRating}</p>
                    <img src={star} className='w-[20px]' alt="" />
                  </div>
                  <p>58%</p>
                </div>
              </li>
            ))}
          </ul>
        <div>
          <img src={arrow} className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} alt="" />
        </div>
      </div> 
    </>
    ) : ("")}
  </section>

          
      
      

      
   
  );
}

export default UserBooks;
