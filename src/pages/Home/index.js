import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
  render(){
    return (
      <div className="Home-container">
        Home
        <Link to="/sobre">Ir para Sobre </Link>
      </div>
    );
  }
}
export default Home;
