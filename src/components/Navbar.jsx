import { useContext } from 'react';
import { Link } from 'react-router-dom';

import LibraryContext from '../context/library/LibraryContext';

const Navbar = () => {
  const context = useContext(LibraryContext);

  return (
    <div className='flex bg-transparent justify-between my-10 px-10 absolute w-screen h-20'>
      <Link to='/'>library</Link>

      <Link to={context.displayX ? '/' : '/add'}>
        <div
          style={{
            transform: `rotateY(0deg) rotate(${
              context.displayX ? '45' : '0'
            }deg)`,
            transition: 'transform 0.5s ease-out',
          }}
        >
          +
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
