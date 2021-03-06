import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';
import api from '../../services/api'


import './styles.css';
export default function Logon() {
  const history = useHistory();

  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      if (response.data.name) {
        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);        

        history.push('/profile');
      }else{
        alert('ID não encontrado');
      }

    } catch (error) {
      alert('Falha no login, tente novamente');
    }

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Sua ID" 
            value={id}
            onChange={ e => setId(e.target.value)}
          />
          <button className={"button"} type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color={"#E02041"}/>
            Não tenho acesso
          </Link>
        </form>
      </section>      
      <img src={heroesImage} alt="heroes"/>
    </div>
  );
}