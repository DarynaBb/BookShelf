import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      {/* <!-- Component: Plain large search input  --> */}
      <div class="relative my-6">
        <input
          id="id-l15"
          type="text"
          name="id-l15"
          placeholder="Search by title, author or genre"
          class="relative w-full h-12 px-4 pr-12 transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-labelledby="title-11 description-11"
          role="graphics-symbol"
          onClick={handleSearch}
        >
          <title id="title-11">Search icon</title>
          <desc id="description-11">Icon description here</desc>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      {/* <!-- End Plain large search input --> */}
    </div>
  );
};

{
  /* <input
                type="text"
                placeholder="Suche nach Büchern oder Genre..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-300 p-2 rounded-md w-84"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
                Suche
            </button> */
}
export default SearchBar;
