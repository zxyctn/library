import { useState, useContext } from 'react';

import LibraryContext from '../../context/library/LibraryContext';

const Pages = ({ id }) => {
  const { books, dispatch } = useContext(LibraryContext);

  const [toggleReadEdit, setToggleReadEdit] = useState(false);
  const [togglePagesEdit, setTogglePagesEdit] = useState(false);
  const [book, setBook] = useState(books.filter((item) => item.id === id)[0]);

  const changeHandler = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const update = () => {
    setToggleReadEdit(false);
    setTogglePagesEdit(false);
    dispatch({
      type: 'EDIT_BOOK',
      payload: book,
    });
  };

  return (
    <div className='flex justify-center'>
      {!toggleReadEdit ? (
        <div
          className='border-2 border-black h-max w-80 text-center text-5xl py-5 bg-black text-white'
          onClick={() => setToggleReadEdit(true)}
        >
          {book.read}
        </div>
      ) : (
        <input
          type='number'
          className='border-2 border-black h-max w-80 text-center text-5xl py-3.5 bg-black text-white'
          placeholder={book.read}
          onBlur={update}
          value={book.read}
          onChange={changeHandler}
          autoFocus={true}
          name='read'
        />
      )}

      {!togglePagesEdit ? (
        <div
          className='border-2 border-black h-max w-80 text-center text-5xl py-5'
          onClick={() => setTogglePagesEdit(true)}
        >
          {book.pages}
        </div>
      ) : (
        <input
          type='number'
          className='border-2 border-black h-max w-80 text-center text-5xl py-3.5 bg-transparent'
          placeholder={book.pages}
          onBlur={update}
          value={book.pages}
          onChange={changeHandler}
          autoFocus={true}
          name='pages'
        />
      )}
    </div>
  );
};

export default Pages;
