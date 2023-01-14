import { useContext, useEffect } from 'react';

import Book from '../components/Book';
import LibraryContext from '../context/library/LibraryContext';

const Home = () => {
  const { books, dispatch } = useContext(LibraryContext);

  useEffect(() => {
    dispatch({ type: 'DISPLAY_+' });
  }, [dispatch]);

  if (!books.length) {
    return <div className='grid place-items-center h-full'>...</div>;
  }
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 place-items-center gap-8 pb-8'>
      {books.map((book) => (
        <div
          key={book.id}
          className='flex justify-center items-center h-80 w-80 relative'
        >
          <Book info={book} />
        </div>
      ))}
    </div>
  );
};

export default Home;
