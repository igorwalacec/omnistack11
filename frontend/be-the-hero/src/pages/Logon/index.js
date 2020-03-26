import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero"/>
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
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