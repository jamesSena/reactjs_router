import React, {Component } from 'react';

class Filme extends Component{
    constructor(props){
        super(props);
        this.state={
            filme:[]
        }
    }

    render(){
        return(
            <div>

            </div>
        );
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        let url ='https://sujeitoprogramador.com/r-api/?api=filmes/'+{id};
        fetch(url).then((r)=>r.json())
        .then()
   }
}
export default Filme;