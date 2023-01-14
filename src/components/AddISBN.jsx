const AddISBN = ({ toggler }) => {
  return (
    <div>
      <h1 className='mb-1'>Add</h1>
      <input
        className='input w-full focus:ring-0 focus:outline-none'
        type='text'
        placeholder='ISBN'
      ></input>
      <button className='button w-full py-1'>Search</button>
      <button className='button w-full py-1 reverse' onClick={toggler}>
        Manual Import
      </button>
    </div>
  );
};

export default AddISBN;
