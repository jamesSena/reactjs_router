import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Produto from './pages/Produto';
import Filme from './pages/Filme';

import Header from './components/Header';

const Routes = ()=>
{   
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sobre" component={Sobre}/>
                <Route path="/produto/:id" component={Produto}/>
                <Route exact path="/filme/:id" component={Filme}/>

                <Route path="*" component={Erro}/>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;