import React from 'react';

const types = {
  cep: { regex: /^\d{5}-?\d{3}$/, message: 'insira um CEP válido!' },
};

const useInputValidation = type => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (error) {
      validate();
    }
  }, [value]);

  function validate() {
    if (value.length === 0) {
      setError('preencha um valor...');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      console.log(value);

      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return { value, setValue, error, validate: () => validate() };
};

export default useInputValidation;
