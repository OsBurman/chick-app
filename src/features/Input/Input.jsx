import css from './Input.module.css';

export const Input = ({ type = "text", value, handleOnChange, placeholder }) => {

  return (
    <input className={css.input} type={type} value={value} onChange={handleOnChange} placeholder={placeholder} />
  );
};