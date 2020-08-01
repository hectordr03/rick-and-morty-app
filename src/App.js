import React from 'react';
import './App.css';

// Components
import HeaderNav from './components/HeaderNav';
import Home from './components/Home'
import Characters from './components/Characters';
import Worlds from './components/Worlds';

// React Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <Route path='/' exact component={Home} />
        <Route path='/characters' component={Characters} />
        <Route path='/worlds' component={Worlds} />
      </div>
    </Router>
  );
}

export default App;

// | | | | | | | | SOURCES | | | | | | | | 
// Rick and Morty lorem ipsum text from : http://loremricksum.com/