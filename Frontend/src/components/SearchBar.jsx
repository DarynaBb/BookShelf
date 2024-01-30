import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="flex justify-center p-4">
            <input
                type="text"
                placeholder="Suche nach Büchern oder Genre..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-300 p-2 rounded-md w-84"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
                Suche
            </button>
        </div>
    );
};

export default SearchBar;
