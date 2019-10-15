import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, BemVindo} from '../../styles.js';
import {HashLink as LinkLocal} from 'react-router-hash-link';
class Header extends Component{
  render(){
    return (
      <Container>
        <BemVindo cor="red">
          Bem Vindo ao Sistema ----
        </BemVindo>
        <Link to="/">Home </Link>
        ------        
        <LinkLocal smooth to="#Sobre">Sobre </LinkLocal>

        <hr/>
     </Container>
    );
  }
}
export default Header;
