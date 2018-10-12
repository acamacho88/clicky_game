import React, { Component } from 'react';
import './Heading.css';

class Heading extends Component {
    state = {
        score: 0,
        topScore: 0
    }

    render() {
        return (
            <div className="headingContainer">
                <div className="title">
                    Clicky Game
                </div>
                <div className="currentResult">
                </div>
                <div className="scorecard">
                    Your score: {this.props.currScore} | Top score: {this.props.highScore}
                </div>
            </div>
        );
    }
}

export default Heading;