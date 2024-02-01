// SearchContext.jsx

import React, { createContext, useState } from 'react';

// Erstelle den Kontext
export const SearchContext = createContext();

// Erstelle den Provider, der die Suchergebnisse verwaltet
export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
