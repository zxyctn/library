import { useState, useContext, useEffect } from 'react';

import LibraryContext from '../context/library/LibraryContext';
import AddISBN from '../components/AddISBN';
import AddManual from '../components/AddManual';

const Add = () => {
  const [isManual, setIsManual] = useState(false);
  const { state, dispatch } = useContext(LibraryContext);

  useEffect(() => {
    dispatch({ type: 'DISPLAY_X' });
  }, [dispatch]);

  return (
    <div className='flex justify-center items-center flex-grow h-full w-full'>
      <div className='grid grid-cols-1 w-screen h-full'>
        {isManual ? (
          <AddManual toggler={() => setIsManual(false)} />
        ) : (
          <AddISBN toggler={() => setIsManual(true)} />
        )}
      </div>
    </div>
  );
};

export default Add;
