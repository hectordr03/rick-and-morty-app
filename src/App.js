import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Characters from './components/Characters';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Characters />
      </div>
    );
  }
}

export default App;
