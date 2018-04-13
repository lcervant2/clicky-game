import React, { Component } from 'react';
import './Board.css';
import Card from './Card';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';

function initialCards() {
  return [
    { value: 1, image: image1 },
    { value: 2, image: image2 },
    { value: 3, image: image3 },
    { value: 4, image: image4 },
    { value: 5, image: image5 },
    { value: 6, image: image6 },
    { value: 7, image: image7 },
    { value: 8, image: image8 },
    { value: 9, image: image9 },
    { value: 10, image: image10 },
    { value: 11, image: image11 },
    { value: 12, image: image12 },
  ];
}

class Board extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      cards: initialCards()
    };
  }

  randomizeCards() {
    var newCards = this.state.cards;
    for (let i = newCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    this.setState({
      cards: newCards
    });
  }

  handleClick(value) {
    this.props.cardClicked(value);
    this.randomizeCards();
  }

  renderCards(cards) {
    return cards.map(card => {
      return (
        <Card key={card.value} card={card} handleClick={() => this.handleClick(card.value)} />
      );
    });
  }

  render() {
    return (
      <div className="board">
        {this.renderCards(this.state.cards)}
      </div>
    );
  }

}

export default Board;