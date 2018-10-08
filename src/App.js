import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Picture from './components/Picture';
import leaders from './leaders.json';
import Heading from './components/Heading';

class App extends Component {
  state = {
    leaders
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <div className="imageContainer">
          {this.state.leaders.map(leader => (
            <Picture
              id={leader.id}
              src={leader.image}
              name={leader.name}
              key={leader.id}
              alt={leader.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
