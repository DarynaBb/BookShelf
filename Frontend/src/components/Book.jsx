import { useState } from 'react';

const Book = ({ book }) => {
    const [isFavorite, setIsFavorite] = useState(book && book.isFavorite);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 w-40">
  
  {/* <!-- Image --> */}
  <figure className= "border-none">
    <img src={book.image} alt="card image" className=" w-full" />
  </figure>
  {/* <!-- Body--> */}
  <div className="p-6">
    <p>
      {book.title}
    </p>
    <p>{book.author}</p>
    <p>{book.score}</p>
  </div>
  {/* <!-- Action icon buttons --> */}
  <div className="flex justify-end gap-2 p-2 pt-0">
    <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
      <span className="relative only:-mx-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-81 desc-81">
          <title id="title-81">Favorite</title>
          <desc id="desc-81">A more detailed description of the icon</desc>
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </span>
    </button>
    <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
      <span className="relative only:-mx-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-82 desc-82">
          <title id="title-82">Share</title>
          <desc id="desc-82">A more detailed description of the icon</desc>
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </span>
    </button>
  </div>
</div>
    );
};

export default Book;
