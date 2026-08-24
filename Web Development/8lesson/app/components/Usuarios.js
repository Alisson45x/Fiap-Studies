'use client'

import { useEffect, useState } from 'react';

const Usuarios = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    let ativo = true;

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((json) => {
        if (ativo) {
          setDados(json);
          setCarregando(false);
        }
      })
      .catch((e) => {
        if (ativo) {
          setErro(e.message);
          setCarregando(false);
        }
      });

    return () => {
      ativo = false;
    };
  }, []);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  return (
    <ul>
      {dados.map((usuario) => (
        <li key={usuario.id}>
          {usuario.name}
        </li>
      ))}
    </ul>
  );
};

export default Usuarios;