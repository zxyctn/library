import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FastAverageColor } from 'fast-average-color';
import isbn from 'node-isbn';
import validUrl from 'valid-url';

import Input from '../components/Input';
import LibraryContext from '../context/library/LibraryContext';

const Add = () => {
  const { _, dispatch } = useContext(LibraryContext);
  const navigate = useNavigate();

  const initialState = {
    title: '',
    author: '',
    publisher: '',
    pages: 0,
    cover: '',
    ISBN: '',
    read: 0,
  };

  const [isManual, setIsManual] = useState(false);
  const [bg, setBg] = useState('transparent');
  const [numCols, setNumCols] = useState(1);
  const [book, setBook] = useState(initialState);

  const inputs = [
    { id: 'title', value: book.title },
    { id: 'author', value: book.author },
    { id: 'publisher', value: book.publisher },
    { id: 'pages', value: book.pages, type: 'number' },
  ];

  useEffect(() => {
    dispatch({ type: 'DISPLAY_X' });
  }, [dispatch]);

  const fac = new FastAverageColor();

  const lookupISBN = (e) => {
    try {
      isbn.resolve(e.target.value, function (err, found) {
        if (!err) {
          setBook((prev) => ({
            ...prev,
            title: found?.title || '',
            cover: validUrl.isUri(found?.imageLinks?.thumbnail)
              ? found?.imageLinks?.thumbnail
              : '',
            pages: found?.pageCount || '',
            publisher: found?.publisher || '',
            author: found?.authors[0] || '',
            ISBN: e.target.value || '',
          }));
        } else {
          setBook((prev) => ({ ...initialState, ISBN: e.target.value }));
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getBgColor = (e) => {
    try {
      validUrl.isUri(e.target.value)
        ? fac
            .getColorAsync(e.target.value, { algorithm: 'sqrt' })
            .then((color) => {
              setBg(() => color.rgba);
            })
            .catch((e) => {
              setBg(() => 'transparent');
            })
        : setBg(() => 'transparent');
    } catch (err) {
      console.log(err);
    }
  };

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
      !book.cover.length &&
      !book.ISBN.length
    ) {
      setNumCols(1);
    } else {
      setNumCols(2);
    }
  };

  const addBook = () => {
    if (
      book.title.length &&
      book.author.length &&
      book.pages !== 0 &&
      book.cover.length
    ) {
      dispatch({ type: 'ADD_BOOK', payload: book });
      navigate('/');
    } else {
      toast.error('Please fill in book details.');
    }
  };

  return (
    <div
      className={`grid grid-cols-${numCols} w-full place-items-center mt-20 md:mt-0`}
      style={{ height: '100%', transition: 'height 0.5s ease-out' }}
    >
      <div className='p-10'>
        <h1 className='mb-1'>Add</h1>
        {isManual ? (
          <>
            <div className='grid grid-cols-2 gap-4'>
              {inputs.map((e) => (
                <Input
                  key={e.id}
                  id={e.id}
                  placeholder={e.placeholder}
                  value={e.value}
                  type={e.type}
                  changeHandler={update}
                />
              ))}
            </div>
            <Input
              id='cover'
              placeholder='Cover URL'
              value={book.cover}
              changeHandler={update}
              keydownHandler={getBgColor}
            />
            <button
              className='button w-full py-1 reverse'
              onClick={() => setIsManual(false)}
            >
              Search with ISBN
            </button>
          </>
        ) : (
          <>
            <Input
              id='ISBN'
              value={book.ISBN}
              changeHandler={update}
              keydownHandler={lookupISBN}
            />
            <button
              className='button w-full py-1 reverse'
              onClick={() => setIsManual(true)}
            >
              Import manually
            </button>
          </>
        )}
      </div>
      {numCols > 1 && (
        <div
          className='w-full place-items-center h-full'
          style={{ background: bg, transition: 'background 0.5s ease-in' }}
        >
          <div className='flex justify-center items-center h-full'>
            <div className=''>
              <img className='h-96 m-auto' src={book.cover} />
              <div className='text-center my-5'>
                <h1 className='title'>{book.title}</h1>
                <h2 className='author'>{book.author}</h2>
                <h3 className='publisher'>{book.publisher}</h3>
              </div>
              <button className='button reverse w-full py-1' onClick={addBook}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Add;
