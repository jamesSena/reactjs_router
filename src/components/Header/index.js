import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Header extends Component{
  render(){
    return (
      <div className="container">
        Meu Header - 
        <Link to="/">Ir para Home </Link>
        -
        <Link to="/sobre">Ir para Sobre </Link>

        <hr/>
     </div>
    );
  }
}
export default Header;
