import React from 'react';
import useFetch from '../../hooks/useFetch';
import { capitalize } from '../../util/util';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const Form = ({ request, setResponse, setJson }) => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const url = 'https://ranekapi.origamid.dev/json/api/usuario';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    };

    const { response, json } = await request(url, options);
  }

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  function handleInputType(campo) {
    let type;

    switch (campo) {
      case 'email':
        type = 'email';
        break;
      case 'senha':
        type = 'password';
        break;
      case 'numero':
        type = 'number';
        break;
      default:
        type = 'text';
    }

    return type;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((campo, index) => {
          return (
            <div key={index}>
              <label htmlFor={campo}>{capitalize(campo)}</label>
              <input
                id={campo}
                value={form[campo]}
                onChange={handleChange}
                type={handleInputType(campo)}
                required
              />
            </div>
          );
        })}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
