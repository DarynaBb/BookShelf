// SearchResultPage.jsx
import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext'; // Benutzung von geschweiften Klammern, um den benannten Export zu importieren

const SearchResultPage = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <div>
      <h2>Suchergebnisse</h2>
      <ul>
        {searchResults.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <p>Bewertung: {book.score}</p>
            {/* Weitere Informationen über das Buch anzeigen */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultPage;
