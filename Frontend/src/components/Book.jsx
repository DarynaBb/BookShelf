import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Book = ({ book }) => {
    const [isFavorite, setIsFavorite] = useState(book && book.isFavorite);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="flex flex-col items-center">
            <img src={book.image} alt="image" className="mb-2"/>
            <h2>{book && book.title}</h2>
            <p>{book && book.author}</p>
            <p>{book && book.score}</p>
            <FontAwesomeIcon
                icon={faHeart}
                className={isFavorite ? 'favorite' : 'not-favorite'}
                onClick={toggleFavorite}
            />
            {!isFavorite && (
                <FontAwesomeIcon
                    icon={faHeart}
                    className="empty-heart"
                    onClick={toggleFavorite}
                />
            )}
        </div>
    );
};

export default Book;
