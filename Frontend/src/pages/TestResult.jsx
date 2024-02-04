import React, { useContext, useEffect, useState } from 'react'
import { TestContext } from '../context/TestContext'
import axios from 'axios';
import { Link } from 'react-router-dom';

function TestResult() {
    const {searchRequest, url, userId} = useContext(TestContext);
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchRequest}&key=%20AIzaSyDIyfWgBaIV5ikUu3OUYx7VigOI0HiGpVw`

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(searchUrl);
                const data = response.data.items;
                setBooks(data);
                setIsLoading(true);
                console.log(data);
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error.message);
            }
        }
        getData();
    }, [])

    const addBookToUser = async (title, description) => {
        try {
            const bookId = await addBook(title, description);
            console.log("BookId", bookId)
            await axios.patch(`${url}/addBook/${userId}`, {
                bookId: bookId
            });
            console.log("EIIIIII!!!")
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error.message);
        }
    }

    const addBook = async (title, description) => {
        try {
            console.log(title, description)
            const response = await axios.post("http://localhost:3001/addBook", {
                title: title,
                description: description
            })
            console.log("Eiiii!")
            return response.data._id;
            
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error.message);
        }
    }

  return (
    <div className='p-[20px]'>
        <Link to="/testsearch">Back to search</Link>
        <ul className='flex flex-col gap-[20px]'>
            {isLoading ? (
                books.map(book => (
                    <li key={book.id} className='flex gap-[20px] '>
                        {book.volumeInfo.imageLinks?.thumbnail && (
                        <img className='object-cover min-w-[200px]' src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                        )}
                        <div className='flex flex-col gap-[10px]'>
                            <p>{book.volumeInfo.title}</p>
                            {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 && (
                            <div>
                                {book.volumeInfo.authors.map((author) => (
                                <p key={author}>{author}</p>
                                ))}
                            </div>
                            )}
                            <p>{book.volumeInfo?.description}</p>
                        </div>
                        <button onClick={() => addBookToUser(book.volumeInfo.title, book.volumeInfo.description  )}>Want to read</button>
                    </li>
                )))
                : ("is loading")}
            
        </ul>

    </div>
  )
}

export default TestResult