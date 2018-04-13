import React, { Component } from 'react';
import './Game.css';
import Board from './Board';

class Game extends Component {

  constructor(props) {
    super(props);

    this.cardClicked = this.cardClicked.bind(this);
    this.gameOver = this.gameOver.bind(this);

    this.state = {
      cardHistory: [],
      score: 0,
      topScore: 0,
      message: "Click one of the images to get started!"
    };
  }

  gameOver() {
    this.setState({
      cardHistory: [],
      score: 0,
      message: "Sorry, you guessed incorrectly."
    });
  }

  cardClicked(value) {
    if (this.state.cardHistory.includes(value)) {
      // lost
      this.gameOver();
    } else {
      // correct guess
      const newScore = this.state.score + 1
      var newCardHistory = this.state.cardHistory;
      newCardHistory.push(value);
      this.setState({
        cardHistory: newCardHistory,
        score: newScore,
        topScore: newScore > this.state.topScore ? newScore : this.state.topScore,
        message: "You guessed correctly!"
      });
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-header">
          <div className="game-logo"><h3>Clicky Game</h3></div>
          <div className="game-message"><h3>{this.state.message}</h3></div>
          <div className="game-scores"><h3>Score: {this.state.score} | Top Score: {this.state.topScore}</h3></div>
        </div>
        <div className="container">
          <Board cardClicked={this.cardClicked} />
        </div>
      </div>
    );
  }

}

export default Game;