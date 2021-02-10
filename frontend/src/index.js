import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Triador from './Triador';
import Admin from './Admin';
import Finalizador from './Finalizador';
import { BrowserRouter,Switch, Route  } from 'react-router-dom' 

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/triador" component={Triador} />
            <Route path="/finalizador" component={Finalizador} />
        </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);

