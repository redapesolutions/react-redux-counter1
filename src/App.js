import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter1.js'; // the point I was making about export default... the importer can choose the name
import GetReduxState from './components/reduxCounter1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {console.log("App.js App component -------------")}
        <Counter />
        <GetReduxState />
      </div>
    );
  }
}

export default App;
