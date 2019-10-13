import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
const Routes = ()=>
{   
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sobre" component={Sobre}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;