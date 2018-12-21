import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state ={
    persons:[
      {name :"max" , age:28 },
      {name:"igor", age:35},
      {name:"light", age:20}
    ]
  }
  onButtonClickHandler = () => {
     this.setState({
      persons:[
        {name :"max cavalera" , age:28 },
        {name:"igor cavalera", age:35},
        {name:"light", age:20}
      ]  
     })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a>
            <button onClick={this.onButtonClickHandler}>Switch button</button>
            <Person 
                name ={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.onButtonClickHandler}/>
            <Person 
                name ={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.onButtonClickHandler}
                >metal is the music</Person>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
