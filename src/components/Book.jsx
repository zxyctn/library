import { useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

const Book = ({ info }) => {
  const [book, setBook] = useState(info);
  const [bg, setBg] = useState('transparent');

  const fac = new FastAverageColor();

  fac
    .getColorAsync(book.cover)
    .then((color) => {
      setBg(() => color.rgba);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <>
      <div
        className='h-80 w-80 absolute'
        style={{
          background: bg,
          height: `${(book.read / book.pages) * 100}%`,
          bottom: 0,
        }}
      ></div>
      <img className='h-72' src={book.cover} style={{ zIndex: 1 }} />
    </>
  );
};

export default Book;
