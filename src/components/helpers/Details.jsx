import { useState, useContext } from 'react';

import LibraryContext from '../../context/library/LibraryContext';

const Details = ({ id }) => {
  const { books, dispatch } = useContext(LibraryContext);

  const [editTitle, setEditTitle] = useState(false);
  const [editAuthor, setEditAuthor] = useState(false);
  const [editPublisher, setEditPublisher] = useState(false);
  const [book, setBook] = useState(books.filter((item) => item.id === id)[0]);

  const changeHandler = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const update = () => {
    setEditTitle(false);
    setEditAuthor(false);
    setEditPublisher(false);

    dispatch({
      type: 'EDIT_BOOK',
      payload: book,
    });
  };

  return (
    <div className='px-10'>
      <h1 className='text-5xl'>
        {!editTitle ? (
          <strong onClick={() => setEditTitle(true)}>{book.title}</strong>
        ) : (
          <strong>
            <input
              type='text'
              className='text-5xl bg-transparent focus:ring-0 focus:border-0 p-0'
              placeholder={book.title}
              onBlur={update}
              value={book.title}
              onChange={changeHandler}
              autoFocus={true}
              name='title'
            />
          </strong>
        )}
      </h1>
      {!editAuthor ? (
        <h2 className='text-3xl'>
          <strong onClick={() => setEditAuthor(true)}>{book.author}</strong>
        </h2>
      ) : (
        <strong>
          <input
            type='text'
            className='bg-transparent text-3xl focus:ring-0 focus:border-0 p-0'
            placeholder={book.author}
            onBlur={update}
            value={book.author}
            onChange={changeHandler}
            autoFocus={true}
            name='author'
          />
        </strong>
      )}

      {!editPublisher ? (
        <h3 className='text-3xl' onClick={() => setEditPublisher(true)}>
          {book.publisher}
        </h3>
      ) : (
        <input
          type='text'
          className='bg-transparent text-3xl focus:ring-0 focus:border-0 p-0'
          placeholder={book.publisher}
          onBlur={update}
          value={book.publisher}
          onChange={changeHandler}
          autoFocus={true}
          name='publisher'
        />
      )}
    </div>
  );
};

export default Details;
