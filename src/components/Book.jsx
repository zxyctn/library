import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FastAverageColor } from 'fast-average-color';
import ReactImageAppear from 'react-image-appear';

const Book = ({ info }) => {
  const [book, _] = useState(info);
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
    <Link to={`/library/${book.id}`}>
      <div className='flex justify-center items-center'>
        <div
          className='h-80 w-80 absolute'
          style={{
            background: bg,
            height: `${(book.read / book.pages) * 100}%`,
            bottom: 0,
            zIndex: -1,
            transition: 'background 0.5s ease-in',
          }}
        ></div>
        <ReactImageAppear
          className='h-72'
          src={book.cover}
          style={{ zIndex: 1 }}
          animation='fadeIn'
          animationDuration='0.5s'
        />
      </div>
    </Link>
  );
};

export default Book;
