import camelCase from 'camelcase';

const Input = ({
  id,
  type = 'text',
  placeholder = null,
  value,
  changeHandler,
  keydownHandler = null,
}) => {
  return (
    <input
      id={id}
      className='input w-full focus:ring-0 focus:outline-none'
      type={type}
      placeholder={
        placeholder ||
        camelCase(id, { pascalCase: true, preserveConsecutiveUppercase: true })
      }
      value={value}
      onChange={changeHandler}
      onKeyDown={keydownHandler}
    />
  );
};

export default Input;
