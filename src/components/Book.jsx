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
        className='flex xl:p-12 md:p-10 p-5 justify-center'
        style={{ zIndex: 1 }}
      >
        <img className='' src={book.cover} />
      </div>
      <div
        className='absolute w-full'
        style={{ background: bg, height: '60%', bottom: '0' }}
      ></div>
    </>
  );
};

export default Book;
