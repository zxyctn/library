import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FastAverageColor } from 'fast-average-color';

const Book = ({ info }) => {
  const [book, setBook] = useState(info);
  const [bg, setBg] = useState('transparent');

  const fac = new FastAverageColor();

  fac
    .getColorAsync(book.cover, { algorithm: 'sqrt' })
    .then((color) => {
      setBg(() => color.rgba);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <Link to={`/${book.id}`}>
      <div className='flex justify-center items-center'>
        <div
          className='h-80 w-80 absolute'
          style={{
            background: bg,
            height: `${(book.read / book.pages) * 100}%`,
            bottom: 0,
            zIndex: -1,
          }}
        ></div>
        <img className='h-72' src={book.cover} style={{ zIndex: 1 }} />
      </div>
    </Link>
  );
};

export default Book;
