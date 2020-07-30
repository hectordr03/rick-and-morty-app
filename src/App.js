import React from 'react';
import './App.css';

// Components
// import Header from './components/Header';
import Characters from './components/Characters';
// import Worlds from './components/Worlds';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Characters />
        {/* <Worlds /> */}
      </div>
    );
  }
}

export default App;
