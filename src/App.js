import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Picture from './components/Picture';
import Heading from './components/Heading';
import leaders from './leaders.json';

class App extends Component {
  state = {
    leaders
  }

  shuffleArray = () => {
    let leadersCopy = this.state.leaders.slice(0);

    let newArray = [];

    for (var i = leadersCopy.length; i > 0; i--) {
      var index = Math.floor(Math.random() * leadersCopy.length);

      newArray.push(leadersCopy.splice(index, 1)[0]);
    }

    return newArray;
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <div className="imageContainer">
          {this.shuffleArray().map(leader => (
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
