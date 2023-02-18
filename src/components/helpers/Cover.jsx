import { useState, useContext } from 'react';
import ReactImageAppear from 'react-image-appear';

import LibraryContext from '../../context/library/LibraryContext';

const Cover = ({ id, updateParent }) => {
  const { books, dispatch } = useContext(LibraryContext);

  const [editCover, setEditCover] = useState(false);
  const [book, setBook] = useState(books.filter((item) => item.id === id)[0]);

  const changeHandler = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const update = () => {
    setEditCover(false);

    dispatch({
      type: 'EDIT_BOOK',
      payload: book,
    });

    updateParent(book);
  };

  return (
    <>
      {!editCover ? (
        <ReactImageAppear
          src={book.cover}
          className='w-80'
          onClick={() => setEditCover(true)}
        />
      ) : (
        <input
          type='text'
          className='text-xl bg-transparent focus:ring-0 focus:border-0 p-0 w-80'
          placeholder={book.cover}
          onBlur={update}
          value={book.cover}
          onChange={changeHandler}
          autoFocus={true}
          name='cover'
        />
      )}
    </>
  );
};

export default Cover;
