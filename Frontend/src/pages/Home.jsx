import React from 'react';
import SearchBar from '../components/SearchBar';
import BookImage from '../assets/image-29.png';
import RomanceImage from '../assets/image 62.png';
import YellowBox from '../components/YellowBox';
import HorrorImage from '../assets/image 57.png';
import MenuBar from '../components/MenuBar';
import BookCarousel from '../components/BookCarousel';
import GenreBar from '../components/GenreBar';
import PopularBooksBar from '../components/PopularBooksBar';
import AuthorBar from '../components/AuthorBar';
import Author1Image from '../assets/image 31.png';
import Author2Image from '../assets/image 32.png';
import Author3Image from '../assets/image 33.png';
import BookImage2 from '../assets/image 27.png';
import ContactBar from '../components/ContactBar';

const books = [
  { id: 1, title: 'Buch 1', author: 'Autor 1',score: 4.3, isFavorite: true, image: BookImage2 },
  { id: 2, title: 'Buch 2', author: 'Autor 2',score: 3.8, isFavorite: false, image: BookImage2 },
  { id: 3, title: 'Buch 3', author: 'Autor 3',score: 4.7, isFavorite: true, image: BookImage2 },
];

const genres = [
  { name: 'Romantik', image: RomanceImage },
  { name: 'Horror', image: HorrorImage },
];

const authors = [
  { name: 'Autor 1', image: Author1Image },
  { name: 'Autor 2', image: Author2Image },
  { name: 'Autor 3', image: Author3Image },
];

const popularBooks = [
  { title: 'Beliebtes Buch 1', image: BookImage2 },
  { title: 'Beliebtes Buch 2', image: BookImage2 },
  { title: 'Beliebtes Buch 3', image: BookImage2 },
];

const handleSelectGenre = (selectedGenre) => {
  console.log(`Das Lieblingsgenre ist: ${selectedGenre}`);
};
const handleSelectAuthor = (selectedAuthor) => {
  console.log(`Der ausgewählte Autor ist: ${selectedAuthor}`);
};

const handleSearch = (query) => {
  console.log('Suche nach:', query);
};

const Home = () => {
    return (
        <div>
            <MenuBar />
            <SearchBar onSearch={handleSearch} />

            <div className="text-center">
                <img src={BookImage} alt="Book" style={{ width: '100%', maxWidth: '800px', margin: 'auto' }} />
            </div>
            <BookCarousel books={books} />

            <GenreBar genres={genres} onSelectGenre={handleSelectGenre} />

            <AuthorBar authors={authors} onSelectAuthor={handleSelectAuthor} />

            <div className="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
                <YellowBox>In the 'Book Garden'  words from electronic and audio covers become abundant seeds, nurturing our thoughts like real flowers of intellect blossoming in the world of virtual pages.</YellowBox>
            </div>

            <PopularBooksBar books={popularBooks} />

            <ContactBar />
        </div>
    );
};

export default Home;
