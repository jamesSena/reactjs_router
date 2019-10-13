import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <div className="Header-container">
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
