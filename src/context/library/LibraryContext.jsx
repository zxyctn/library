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
        cover: '/library/1984.jpg',
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
        cover: '/library/alchemist.jpg',
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
          '/library/ikigai.jpg',
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
