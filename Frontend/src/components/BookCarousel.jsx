
import Book from './Book';

const BookCarousel = ({ books }) => {
    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            <button>{'<'}</button>
            
            {books.map(book => (
                    <Book key={book.id} book={book} />
                ))}

    glide01.mount();

    return () => {
      glide01.destroy();
    };
  }, []);

  return (
    <div className="relative w-full glide-01 pt-4 pb-4">
      {/* Slides */}
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
          {books.map((book, index) => (
            <li key={index}>
              <Book book={book} />
            </li>
          ))}
        </ul>
      </div>
      {/* Controls */}
      <div className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 " data-glide-el="controls">
        <button className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir="<" aria-label="prev slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <title>prev slide</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </button>
        <button className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir=">" aria-label="next slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <title>next slide</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookCarousel;
