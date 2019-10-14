import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Header extends Component{
  render(){
    return (
      <div className="container-header">
        <Link to="/">Ir para Home </Link>
        <hr/>
     </div>
    );
  }
}
export default Header;
