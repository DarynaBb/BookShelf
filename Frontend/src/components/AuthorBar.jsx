// AuthorBar.jsx
import React from 'react';

const AuthorBar = ({ authors, onSelectAuthor }) => {
    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            {authors.map((author, index) => (
                <div key={index} onClick={() => onSelectAuthor(author.name)} className="flex flex-col items-center cursor-pointer">
                    <img src={author.image} alt={author.name} className="mb-2" />
                    <span>{author.name}</span>
                </div>
            ))}
        </div>
    );
};

export default AuthorBar;
