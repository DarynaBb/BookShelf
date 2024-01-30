
import Book from './Book';

const BookCarousel = ({ books }) => {
    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            <button>{'<'}</button>
            
            {books.map(book => (
                    <Book key={book.id} book={book} />
                ))}

            <button>{'>'}</button>
        </div>
    );
};

export default BookCarousel;
