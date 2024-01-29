// GenreBar.jsx
import React from 'react';
import GenreCard from './GenreCard';

const GenreBar = ({ genres, onSelectGenre }) => {
    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            {genres.map((genre, index) => (
                <GenreCard key={index} {...genre} onSelect={onSelectGenre} />
            ))}
        </div>
    );
};

export default GenreBar;
