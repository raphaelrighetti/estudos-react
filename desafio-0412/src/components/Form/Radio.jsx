import React from 'react';

const Radio = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      {options.map(option => {
        return (
          <label key={option}>
            <input
              id={option}
              checked={option === value}
              value={option}
              onChange={handleChange}
              type="radio"
            />
            {option}
            <br />
          </label>
        );
      })}
    </>
  );
};

export default Radio;
