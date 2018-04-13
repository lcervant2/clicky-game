import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="card" onClick={this.props.handleClick}>
        <img className="card-image" src={this.props.card.image} alt={this.props.card.value} />
      </div>
    );
  }

}

export default Card;