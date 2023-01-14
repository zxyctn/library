import { useState, useContext, useEffect } from 'react';

import LibraryContext from '../context/library/LibraryContext';

const Add = () => {
  const [isManual, setIsManual] = useState(false);
  const { state, dispatch } = useContext(LibraryContext);

  useEffect(() => {
    dispatch({ type: 'DISPLAY_X' });
  }, [dispatch]);

  return (
    <div className='flex justify-center items-center h-full'>
      <div className='grid grid-cols-1 gap-4'>
        <h1>Add</h1>
        <input
          className='input w-full focus:ring-0 focus:outline-none'
          type='text'
          placeholder='ISBN'
        ></input>
        <button className='button w-full py-1'>Search</button>
        <button className='button w-full py-1 reverse'>Manual Import</button>
      </div>
    </div>
  );
};

export default Add;
