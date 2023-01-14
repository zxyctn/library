import { useContext } from 'react';
import { Link } from 'react-router-dom';

import LibraryContext from '../context/library/LibraryContext';

const Navbar = () => {
  const context = useContext(LibraryContext);

  return (
    <div className='flex bg-transparent justify-between my-10'>
      <Link to='/'>library</Link>
      {context.displayX ? (
        <Link to='/'>
          <div
            style={{
              transform: 'rotateY(0deg) rotate(45deg)',
              transition: 'transform 2s',
            }}
          >
            +
          </div>
        </Link>
      ) : (
        <Link to='/add'>+</Link>
      )}
    </div>
  );
};

export default Navbar;
