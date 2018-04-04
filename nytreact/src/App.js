import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Saved from './pages/saved';
import Header from './components/header';

const App = () => (
 
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
    </div>
  </Router>

);

export default App;

//<Route exact path='/saved' component={Saved} />