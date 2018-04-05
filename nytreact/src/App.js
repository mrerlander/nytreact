import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Saved from './pages/saved';

const App = () => (
 
  <Router>
    <div>      
      <Route 
        exact path="/" 
        component={Home} 
      />
      <Route 
        exact path="/saved" 
        component={Saved} 
      />
    </div>
  </Router>

);

export default App;