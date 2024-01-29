// PopularBooksBar.jsx
import React from 'react';

const PopularBooksBar = ({ books }) => {
    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            {books.map((book, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={book.image} alt={book.title} className="mb-2" style={{ maxWidth: '100px', maxHeight: '150px' }} />
                    <span>{book.title}</span>
                </div>
            ))}
        </div>
    );
};

export default PopularBooksBar;
