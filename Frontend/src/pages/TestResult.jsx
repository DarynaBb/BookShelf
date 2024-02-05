import React, { useContext, useEffect, useState } from 'react'
import { TestContext } from '../context/TestContext'
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
import arrow from "../assets/arrow-back-to-top.svg"
import Pagination from '../components/Pagination';

function TestResult() {
    const {searchRequest, url, userId} = useContext(TestContext);
    const [books, setBooks] = useState([]);
    const [extendedBooksInfo, setExtendedBooksInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchRequest}&projection+full&maxResults=20&key=%20AIzaSyDIyfWgBaIV5ikUu3OUYx7VigOI0HiGpVw`;
    const [buttonTexts, setButtonTexts] = useState(Array(20).fill('Want to read'));

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://www.googleapis.com/books/v1/volumes?q=${searchRequest}&projection+full&maxResults=20&printType=books&key=AIzaSyBYq15lwhf_f-VeRgSWQhN1GJ259J6qZcw`
            );
            const data = response.data.items;
            const processedBooks = data.map((book) => {
                const description = book.volumeInfo.description || '';
                const halfLength = Math.ceil(description.length / 2);
                const lastSpaceIndex = description.lastIndexOf(' ', halfLength);
        
                let firstHalf, secondHalf;
        
                if (lastSpaceIndex !== -1) {
                  firstHalf = description.slice(0, lastSpaceIndex);
                  secondHalf = description.slice(lastSpaceIndex + 1);
                } else {
                  // If no space found, split at the halfLength
                  firstHalf = description.slice(0, halfLength);
                  secondHalf = description.slice(halfLength);
                }
        
                return {
                  ...book,
                  volumeInfo: {
                    ...book.volumeInfo,
                    halfDescription: [firstHalf, secondHalf],
                  },
                };
              });
        
              setBooks(processedBooks);
              setIsLoading(true);
              console.log("Processed", processedBooks);
          } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error.message);
          }
        };
    
        getData();
      }, []);

    const addBookToUser = async (title, description, author, image, index) => {
        try {
            const bookId = await addBook(title, description, author, image);
            console.log("BookId", bookId)
            await axios.patch(`${url}/addBook/${userId}`, {
                bookId: bookId
            });
            const updatedButtonTexts = [...buttonTexts];
            updatedButtonTexts[index] = 'Added to your list';
            setButtonTexts(updatedButtonTexts);
            console.log("EIIIIII!!!")
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error.message);
        }
    }

    const addBook = async (title, description, author, image) => {
        try {
            console.log(title, description)
            const response = await axios.post("http://localhost:3001/addBook", {
                title: title,
                description: description,
                author: author,
                image: image
            })
            console.log("Eiiii!")
            console.log(response.data._id)
            return response.data._id;
            
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error.message);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

  return (
    <>
    <NavBar />
    <Pagination path="/testsearch" page="Search" />
    <section className='max-container padding-container mt-[40px]'>
        <ul className='flex flex-col gap-[80px]'>
        {isLoading &&
          books.map((book, index) => (
            <li key={book.id} className='flex gap-[20px] justify-between '>
                <div className='basis-[25%]'>
                    {book.volumeInfo.imageLinks?.thumbnail && (
                        <img className='object-cover w-[80%] ' src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                    )} 
                </div>
                <div className='basis-[70%]'>
                    <div className='flex items-start justify-between gap-[10px]'>
                        <div className='basis-[50%]'>
                            <div className='flex flex-col gap-[10px]'>
                                <p className='inter-semi-bold text-[20px]'>{book.volumeInfo.title}</p>
                                {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 && (
                                    <div className=''>
                                        {book.volumeInfo.authors.map((author) => (
                                            <p key={author}> {author}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <button className='hover:bg-btn-gray  whitespace-nowrap basis-[15%] inter-semi-bold uppercase py-[19px] px-[30px] border-[1px] border-btn-gray' onClick={() => addBookToUser(book.volumeInfo.title, book.volumeInfo.description, book.volumeInfo.authors[0], book.volumeInfo.imageLinks?.thumbnail, index)}>
                            {buttonTexts[index]}
                        </button>  
                    </div>
                    <div className='flex gap-[30px] pt-regular mt-[30px]'>
                        <p>{book.volumeInfo?.halfDescription[0]}</p>
                        <p>{book.volumeInfo?.halfDescription[1]}</p>
                    </div>
                </div>
            </li>
          ))}
      </ul>
      <div className='flex justify-center my-[40px]'>
        <button onClick={scrollToTop}>Back to top</button>
        <img src={arrow} alt="" />
      </div>
    </section>
    </>
  )
}

export default TestResult