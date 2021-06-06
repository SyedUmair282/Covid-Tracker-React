import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home'
import Covid from './covid'
import About from './about'



function AppRouter() {
    return (
        <div>
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/covid" component={Covid}/>
            <Route path="/about" component={About}/>
        </Router>
        </div>
    );
  }
  
export default AppRouter;