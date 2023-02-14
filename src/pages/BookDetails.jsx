import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FastAverageColor } from 'fast-average-color';

import LibraryContext from '../context/library/LibraryContext';
import Pages from '../components/helpers/Pages';
import Details from '../components/helpers/Details';

import { getForegroundColor } from '../helpers';

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
      dispatch({
        type: 'SET_FOREGROUND',
        payload: getForegroundColor(color.hex),
      });
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
            <Details id={book.id} />
          </div>
        </div>
      </div>

      <Pages id={book.id} />
    </div>
  );
};

export default BookDetails;
