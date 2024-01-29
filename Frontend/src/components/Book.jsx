// Book.jsx
import React from 'react';
import BookImage from '../assets/image 27.png';

const Book = ({ title, author, score, isFavorite }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={BookImage} alt={title} className="mb-2" />
            <div>{title}</div>
            <div>{author}</div>
            <div>{score}</div>
            <button>{isFavorite ? 'Favorit entfernen' : 'Als Favorit markieren'}</button>
        </div>
    );
};

export default Book;
