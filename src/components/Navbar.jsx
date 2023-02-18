import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LibraryContext from '../context/library/LibraryContext';

const Navbar = () => {
  const { displayMinus, displayX, dispatch } = useContext(LibraryContext);
  const navigate = useNavigate();

  return (
    <div className='flex bg-transparent justify-between my-10 px-10 absolute w-screen h-20'>
      <Link to='/library/'>library</Link>

      <div className='block'>
        <Link to={displayX ? '/library/' : '/library/add'}>
          <div
            style={{
              transform: `rotateY(0deg) rotate(${displayX ? '45' : '0'}deg)`,
              transition: 'transform 0.5s ease-out',
            }}
          >
            +
          </div>
        </Link>
        <div
          className={
            'text-center ' +
            (displayMinus ? 'cursor-pointer' : 'cursor-default')
          }
          style={{
            transition: 'opacity 0.5s',
            opacity: displayMinus ? 1 : 0,
          }}
          onClick={() => {
            if (displayMinus) {
              dispatch({
                type: 'REMOVE_BOOK',
              });
              navigate('/library/');
            }
          }}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default Navbar;
