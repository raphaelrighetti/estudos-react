import React from 'react';
import Input from '../components/Form/Input';
import useInputValidation from '../hooks/useInputValidation';

function App() {
  const nome = useInputValidation();
  const cep = useInputValidation('cep');

  return (
    <div>
      <p>{nome.value}</p>
      <Input
        label={'Nome'}
        id={'nome'}
        value={nome.value}
        setValue={nome.setValue}
        error={nome.error}
        validate={nome.validate}
      />
      <br />
      <Input
        label={'CEP'}
        id={'cep'}
        value={cep.value}
        setValue={cep.setValue}
        error={cep.error}
        validate={cep.validate}
      />
    </div>
  );
}

export default App;
