import Book from './Book';

const Grid = () => {
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2'>
      <div className='bg-gray-200 aspect-square'>
        <Book />
      </div>
      <div className='bg-gray-800 aspect-square'></div>
      <div className='bg-gray-400 aspect-square'></div>
      <div className='bg-gray-700 aspect-square'></div>
      <div className='bg-gray-500 aspect-square'></div>
      <div className='bg-gray-600 aspect-square'></div>
      <div className='bg-gray-300 aspect-square'></div>
      <div className='bg-gray-900 aspect-square'></div>
      <div className='bg-gray-200 aspect-square'></div>
      <div className='bg-gray-800 aspect-square'></div>
      <div className='bg-gray-400 aspect-square'></div>
      <div className='bg-gray-700 aspect-square'></div>
    </div>
  );
};

export default Grid;
