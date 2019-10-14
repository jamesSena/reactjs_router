import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, BemVindo} from '../../styles.js';

class Header extends Component{
  render(){
    return (
      <Container>
        <BemVindo cor="red">
          Bem Vindo ao Sistema
        </BemVindo>
          <Link to="/">Ir para Home </Link>
        <hr/>
     </Container>
    );
  }
}
export default Header;
