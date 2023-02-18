import { createContext, useReducer } from 'react';

import libraryReducer from './LibraryReducer';

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const initialState = {
    id: null,
    displayX: false,
    displayMinus: false,
    books: [
      {
        id: 1,
        cover: 'https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg',
        title: '1984',
        author: 'George Orwell',
        publisher: 'Penguin',
        pages: 336,
        read: 84,
        started: new Date(2023, 0, 3),
        finished: null,
      },
      {
        id: 2,
        cover: 'https://m.media-amazon.com/images/I/71h2Cp+305L.jpg',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        publisher: 'Harper Collins',
        pages: 192,
        read: 100,
        started: null,
        finished: null,
      },
      {
        id: 3,
        cover:
          'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71tbalAHYCL.jpg',
        title: 'IKIGAI',
        author: 'Héctor García',
        publisher: 'Penguin',
        pages: 208,
        read: 208,
        started: new Date(2023, 0, 13),
        finished: null,
      },
    ],
  };

  const [state, dispatch] = useReducer(libraryReducer, initialState);

  return (
    <LibraryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryContext;
