import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Home from './components/Home'
import Characters from './components/Characters';
import Worlds from './components/Worlds';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home /> */}
        <Characters />
        {/* <Worlds /> */}
      </div>
    );
  }
}

export default App;

// | | | | | | | | SOURCES | | | | | | | | 
// Rick and Morty lorem ipsum text from : http://loremricksum.com/