import React, { Component } from 'react';
import './App.css';
import Picture from './components/Picture';
import Heading from './components/Heading';
import leaders from './leaders.json';

class App extends Component {


  state = {
    leadersClicked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    currScore: 0,
    highScore: 0
  }

  pictureClicked = id => {

    let currentLeaders = this.state.leadersClicked.slice(0);

    if (currentLeaders[id] !== 1) {

      currentLeaders[id] = 1;

      this.setState({
        leadersClicked: currentLeaders,
        currScore: currentLeaders.reduce(this.getSum)
      })
    } else {
      let currHS = (this.state.highScore < this.state.currScore) ? this.state.currScore : this.state.highScore;

      this.setState({
        leadersClicked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        currScore: 0,
        highScore: currHS
      })
    }
  }

  getSum = (total, value) => {
    return total + value;
  }

  shuffleArray = () => {
    let leadersCopy = leaders.slice(0);

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
        <Heading
          currScore={this.state.currScore}
          highScore={this.state.highScore}
        />
        <div className="imageContainer">
          {this.shuffleArray().map(leader => (
            <Picture
              id={leader.id}
              src={leader.image}
              name={leader.name}
              key={leader.id}
              alt={leader.name}
              onClick={() => this.pictureClicked(leader.id - 1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
