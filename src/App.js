import React, {Component} from 'react';
import Routes from './router';
import './App.css';
class App extends Component{
  render(){
    return (
      <div className="App-container">
        <Routes/>
     </div>
    );
  }
}
export default App;
