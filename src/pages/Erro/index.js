import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Erro extends Component{
  render(){
    return (
      <div className="Erro-container">
        <h2>Pagina não encontra</h2>
        <h3>Você está procurando por:</h3>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
}
export default Erro;
