import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a>
            <Person name ="max" age="25"/>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
