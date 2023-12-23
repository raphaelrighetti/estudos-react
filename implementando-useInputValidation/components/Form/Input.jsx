import React from 'react';

const Input = ({ label, id, value, setValue, error, validate }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  function handleBlur() {
    if (validate) {
      console.log('deveria validar...');
      validate();
    }
  }

  return (
    <>
      <label htmlFor={id} style={{ textTransform: 'capitalize' }}>
        {label}
      </label>
      <input
        id={id}
        value={value}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
    </>
  );
};

export default Input;
