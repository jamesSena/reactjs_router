import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      filmes:[]
    }
    this.loadFilmes = this.loadFilmes.bind(this);
  }

  componentDidMount(){
    this.loadFilmes();
  }
loadFilmes(){
  let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
  fetch(url)
  .then((r)=>r.json())
  .then((json)=>{
    this.setState({filmes:json})
    console.log(this.state.filmes);
  });

}
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
