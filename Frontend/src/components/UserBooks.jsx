import React, { useContext, useEffect, useState } from 'react';
import { UserBooksContext } from '../context/UserBooksContext';
import star from "../assets/star24Px.svg"
import arrow from "../assets/arrowForward.svg"
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { UserProfileContext } from '../context/UserProfileContext';
import axios from 'axios';



function UserBooks() {
  const {
    getBooks,
    isCurrentlyReading,
    setIsCurrentlyReading,
    isWantToRead,
    setIsWantToRead,
    isRead,url,
    setIsRead,
    currentlyReading,
    wantToRead,
    read,
    isShelfUpdated,
    isBookDeleted,
    changeShelf,
    deleteBook,
    isMyBooksOpen, isLoading, chosenCurrentlyBook, setChosenCurrentlyBook,
    chosenWantToReadBook, setChosenWantToReadBook, chosenReadBook, setChosenReadBook, progressValue, setProgressValue
  } = useContext(UserBooksContext);
  const {userId} = useContext(UserProfileContext);
  
  const [showProgress, setShowProgress] = useState(true); 
  const [pageCount, setPageCount] = useState(0);
  const [chosenCurrentId, setChosenCurrentId] = useState('');
  const [chosenWantId, setChosenWantId] = useState('');
  const [chosenReadId, setChosenReadId] = useState('');

  useEffect(() => {
    getBooks();
  }, [isShelfUpdated, isBookDeleted]);

  useEffect(() => {
    const updateProgress = async () => {
      const bookId = chosenCurrentlyBook[0].book._id;
      console.log("BookId",bookId);
      try {
        const axiosUrl = `${url}/updateBook/${userId}/${bookId}`;
        await axios.patch(axiosUrl, {
          progress: progressValue
        });
        console.log("Uiii!")
      } catch (error) {
        console.error('Error updating progress:', error.message);
      } 
    };
    updateProgress();
    getBooks();
  },[progressValue])

  
  

  const onClickHandler = (id, shelf) => {
    const book = shelf.filter((book) => book.book._id === id);
    if (shelf === currentlyReading) {
      setChosenCurrentlyBook(book);
      const numberOfPages = book[0].book.pageCount;
      const progress = book[0].progress;
      setPageCount(numberOfPages);
      setProgressValue(progress);
      setChosenCurrentId(id);
    } else if (shelf === wantToRead) {
      setChosenWantToReadBook(book);
      setChosenWantId(id);
    } else {
      setChosenReadBook(book);
      setChosenReadId(id);
    }
    
  };

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  

  return (
    <section className=''>
      <h2 className={isMyBooksOpen ? "block pt-regular text-[32px] mb-[24px]" : "hidden"}>My Books</h2>
      {isCurrentlyReading ? (
        currentlyReading.length > 0 ? (<>
          <h3 className='pt-regular text-[32px] mb-[24px]'>Currently reading ({currentlyReading.length} {currentlyReading.length !== 1 ? "books" : "book"})</h3>
          {chosenCurrentlyBook?.map(book => (
            <div key={book.book._id} className='mb-[60px]'>
            <div className='flex justify-between gap-[40px]'>
              <img className='min-w-[286px] object-cover' src={book.book.image} alt="" />
              <div className='flex flex-col justify-between '>
                <div>
                  <p className='inter-semi-bold text-[20px]'>{book.book.title}</p>
                <p>by {book.book.author}</p>
                <p className='pt-regular mt-[20px]'>{book.book.description}</p>
              </div>
              <div className='my-[20px]'>
                <p className='mb-[10px]'>You are on page {progressValue} of {book.book.pageCount}</p>
              <ProgressBar/>
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
                <button className='bg-black text-white py-[20px] px-[75px]' onClick={() => deleteBook(book.book._id, setChosenCurrentlyBook)}>REMOVE</button>
             </div>
            </div>
            </div>
            
            <div className='flex mt-[20px] justify-between items-center max-w-[286px]'>
              <div className='flex gap-[5px] items-center'>
                <p>{book.book.averageRating}</p>
                <img src={star} className='w-[20px]' alt="" />
              </div>
              <p>{((progressValue / Number(book.book.pageCount)) * 100).toFixed(0)}%</p>
            </div>
            </div> 
          ))}   
          <div className={chosenCurrentlyBook.length > 0 ? "block mt-[60px] mb-[40px]" : "hidden"}>
              <h3 className='pt-regular text-[32px]'>Also reading </h3>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <img src={arrow} className='rotate-180 opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} alt="" />
            </div>
            <ul id='slider' className='flex gap-[100px] max-w-[700px] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
              {currentlyReading?.filter(book => book.book._id !== chosenCurrentId).map((book, index) => 
                (
                  <li onClick={() => onClickHandler(book.book._id, currentlyReading)} key={book.book._id} className='flex flex-col gap-[20px] cursor-pointer'>
                    <img className='max-w-[160px] h-full object-cover hover:-translate-y-3 ease-in-out duration-500' src={book.book.image} alt="" />
                    <div className='flex mt-[10px] justify-between items-center'>
                      <div className='flex gap-[5px] items-center'>
                        <p>{book.book.averageRating}</p>
                        <img src={star} className='w-[20px]' alt="" />
                      </div>
                      <p>{((book.progress / Number(book.book.pageCount)) * 100).toFixed()}%</p>
                    </div>
                  </li>
                ) 
              )}
            </ul>
            {/* <div>
              <img src={arrow} className='rotate-180 opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} alt="" />
            </div> */}
          <div className=''>
            {/* <img src={arrow} className='rotate-180 opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} alt="" /> */}
            <img src={arrow} className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} alt="" />
          </div>
        </div> 
      </>) : (<>
          <p className='pt-regular text-[28px] mb-[24px]'>No books currently on your shelf. </p>
          <p className='pt-regular text-[28px]'>Explore some new ones</p>
          <Link className='pt-regular text-[28px] underline' to="/main">here.</Link>
        </>)
    ) : ("")}

{isWantToRead ? (
  wantToRead.length > 0 ? (
          <>
        <p className='pt-regular text-[32px] mb-[24px]'>Want to read ({wantToRead.length} {wantToRead.length > 1 ? "books" : "book"})</p>
        {chosenWantToReadBook?.map(book => (
          <div key={book.book._id} className='mb-[60px]'>
          <div className='flex justify-between gap-[20px]'>
            <img className='min-w-[286px]' src={book.book.image} alt="" />
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
              <button className='bg-black text-white py-[20px] px-[75px]' onClick={() => deleteBook(book.book._id, setChosenWantToReadBook)}>REMOVE</button>
           </div>
          </div>
          </div>
          <div className='flex mt-[20px] justify-between items-center max-w-[286px]'>
            <div className='flex gap-[5px] items-center'>
              <p>{book.book.averageRating}</p>
              <img src={star} className='w-[20px]' alt="" />
            </div>
            <p>{((book.progress / book.book.pageCount) * 100).toFixed(0)}%</p>
          </div>
          </div> 
        ))}
        <div className={chosenWantToReadBook.length > 0 ? "block mt-[60px] mb-[40px]" : "hidden"}>
          <h3 className='pt-regular text-[32px]'>More</h3>
        </div>   
        <div className='flex justify-between items-center'>
          <div>
            <img src={arrow} className='rotate-180 opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} alt="" />
          </div>
          <ul id='slider' className='flex gap-[100px] max-w-[700px] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
            {wantToRead?.filter(book => book.book._id !== chosenWantId).map((book, index) => (
              <li onClick={() => onClickHandler(book.book._id, wantToRead)} key={book.book._id} className='flex flex-col gap-[20px] cursor-pointer '>
                <img className='max-w-[160px]  h-full object-cover hover:-translate-y-3 ease-in-out duration-500' src={book.book.image} alt="" />
                <div className='flex mt-[10px] justify-between items-center'>
                  <div className='flex gap-[5px] items-center'>
                    <p>{book.book.averageRating}</p>
                    <img src={star} className='w-[20px]' alt="" />
                  </div>
                  <p>{((book.progress / book.book.pageCount) * 100).toFixed(0)}%</p>
                </div>
              </li>
            ))}
          </ul>
        <div>
          <img src={arrow} className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} alt="" />
        </div>
      </div> 
    </>
        ) : 
        (
        <>
          <p className='pt-regular text-[28px] mb-[24px]'>No books currently on your shelf. </p>
          <p className='pt-regular text-[28px]'>Explore some new ones</p>
          <Link className='pt-regular text-[28px] underline' to="/main">here.</Link>
        </>
        )
        
    ) : ("")}

{isRead  ? (
  read.length > 0 ? (
    <>
        <p className='pt-regular text-[32px] mb-[24px]'>Read ({read.length} {read.length > 1 ? "books" : "book"})</p>
        {chosenReadBook?.map(book => (
          <div key={book.book._id} className='mb-[60px]'>
          <div className='flex justify-between gap-[20px]'>
            <img className='min-w-[286px]' src={book.book.image} alt="" />
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
              <button className='bg-black text-white py-[20px] px-[75px]' onClick={() => deleteBook(book.book._id, setChosenReadBook)}>REMOVE</button>
           </div>
          </div>
          </div>
          <div className='flex mt-[20px] justify-between items-center max-w-[286px]'>
            <div className='flex gap-[5px] items-center'>
              <p>{book.book.averageRating}</p>
              <img src={star} className='w-[20px]' alt="" />
            </div>
            <p>100%</p>
          </div>
          </div> 
        ))}  
        <div className={chosenReadBook.length > 0 ? "block mt-[60px] mb-[40px]" : "hidden"}>
          <h3 className='pt-regular text-[32px]'>More</h3>
        </div>  
        <div className='flex justify-between items-center'>
          <div>
            <img src={arrow} className='rotate-180 opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} alt="" />
          </div>
          <ul id='slider' className='flex gap-[100px] max-w-[700px] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
            {read?.filter(book => book.book._id !== chosenReadId).map((book, index) => (
              <li onClick={() => onClickHandler(book.book._id, read)} key={book.book._id} className='flex flex-col gap-[20px] cursor-pointer '>
                <img className='max-w-[160px]  h-full object-cover hover:-translate-y-3 ease-in-out duration-500' src={book.book.image} alt="" />
                <div className='flex mt-[10px] justify-between items-center'>
                  <div className='flex gap-[5px] items-center'>
                    <p>{book.book.averageRating}</p>
                    <img src={star} className='w-[20px]' alt="" />
                  </div>
                  <p>100%</p>
                </div>
              </li>
            ))}
          </ul>
        <div>
          <img src={arrow} className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} alt="" />
        </div>
      </div> 
    </>
  ) : (
    <>
          <p className='pt-regular text-[28px] mb-[24px]'>No books currently on your shelf. </p>
          <p className='pt-regular text-[28px]'>Explore some new ones</p>
          <Link className='pt-regular text-[28px] underline' to="/main">here.</Link>
        </>
  )
        
    ) : ("")}
    
  </section>

          
      
      

      
   
  );
}

export default UserBooks;
