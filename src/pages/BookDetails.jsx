import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FastAverageColor } from 'fast-average-color';

import LibraryContext from '../context/library/LibraryContext';

const BookDetails = () => {
  const { books, dispatch } = useContext(LibraryContext);

  const params = useParams();

  const [book, setBook] = useState(books.find((e) => e.id == params.id));
  const [bg, setBg] = useState('transparent');

  const fac = new FastAverageColor();

  fac
    .getColorAsync(book.cover, { algorithm: 'sqrt' })
    .then((color) => {
      setBg(() => color.rgba);
    })
    .catch((e) => {
      setBg(() => 'transparent');
    });

  useEffect(() => {
    dispatch({ type: 'DISPLAY_X' });
  }, [dispatch]);

  return (
    <div
      className='w-full h-screen place-items-center grid place-items-stretch'
      style={{ background: bg }}
    >
      <div className='justify-center items-end flex mb-5'>
        <div className='flex'>
          <img src={book.cover} className='w-80' />
          <div className='m-auto w-80'>
            <div className='h-fit w-fit m-auto px-5'>
              <h1 className='text-5xl'>
                <strong>{book.title}</strong>
              </h1>
              <h2>
                <strong>{book.author}</strong>
              </h2>
              <h3>{book.publisher}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='border-2 border-black h-max w-80 text-center text-5xl py-5 bg-black text-white'>
          {book.read}
        </div>
        <div className='border-2 border-black h-max w-80 text-center text-5xl py-5'>
          {book.pages}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
