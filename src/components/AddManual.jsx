import { useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

const AddManual = ({ toggler }) => {
  const [bg, setBg] = useState('transparent');
  const [numCols, setNumCols] = useState(1);
  const [book, setBook] = useState({
    title: '',
    author: '',
    publisher: '',
    pages: 0,
    cover: '',
  });

  const fac = new FastAverageColor();

  const update = (e) => {
    setBook((prev) => ({
      ...prev,
      [`${e.target.id}`]: e.target.value,
    }));

    if (
      !book.title.length &&
      !book.author.length &&
      !book.publisher.length &&
      book.pages === 0 &&
      !book.cover.length
    ) {
      setNumCols(1);
    } else {
      setNumCols(2);
    }

    if (fetch(book.cover)) {
      fac
        .getColorAsync(book.cover)
        .then((color) => {
          setBg(() => color.rgba);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div
      className={`grid grid-cols-${numCols} w-full place-items-center`}
      style={{ height: '100%' }}
    >
      <div>
        <h1 className='mb-1'>Add</h1>
        <div className='grid grid-cols-2 gap-4'>
          <input
            id='title'
            className='input w-full focus:ring-0 focus:outline-none'
            type='text'
            placeholder='Title'
            value={book.title}
            onChange={update}
          />
          <input
            id='author'
            className='input w-full focus:ring-0 focus:outline-none'
            type='text'
            placeholder='Author'
            value={book.author}
            onChange={update}
          />
          <input
            id='publisher'
            className='input w-full focus:ring-0 focus:outline-none'
            type='text'
            placeholder='Publisher'
            value={book.publisher}
            onChange={update}
          />
          <input
            id='pages'
            className='input w-full focus:ring-0 focus:outline-none'
            type='number'
            placeholder='Pages'
            value={book.pages}
            onChange={update}
            min={1}
          />
        </div>
        <input
          id='cover'
          className='input w-full focus:ring-0 focus:outline-none'
          type='text'
          placeholder='Cover URL'
          value={book.cover}
          onChange={update}
        />
        <button className='button w-full py-1 reverse' onClick={toggler}>
          Search with ISBN
        </button>
      </div>
      {numCols > 1 && (
        <div
          className='w-full place-items-center h-full'
          style={{ background: bg }}
        >
          <div className='flex justify-center items-center h-full'>
            <div className=''>
              <img className='h-96 m-auto' src={book.cover} />
              <div className='text-center my-5'>
                <h1 className='title'>{book.title}</h1>
                <h2 className='author'>{book.author}</h2>
                <h3 className='publisher'>{book.publisher}</h3>
              </div>
              <button className='button reverse w-full py-1'>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddManual;
