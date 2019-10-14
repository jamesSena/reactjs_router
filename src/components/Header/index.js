import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../../styles.js';

class Header extends Component{
  render(){
    return (
      <Container>
          <Link to="/">Ir para Home </Link>
        <hr/>
     </Container>
    );
  }
}
export default Header;
