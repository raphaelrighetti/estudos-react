import React from 'react';

const User = ({ data }) => {
  if (!data) return null;

  if (!data.display_name) {
    return <p style={{ color: 'red' }}>Usuário já cadastrado!</p>;
  }

  return (
    <div>
      <p style={{ color: 'green' }}>Usuário cadastrado com sucesso!</p>
      <br />
      <p>ID: {data.ID}</p>
      <p>Nome: {data.display_name}</p>
      <p>Role: {data.role}</p>
    </div>
  );
};

export default User;
