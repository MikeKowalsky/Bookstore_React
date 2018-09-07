import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {

    toggleHover = (e) => {
        e.currentTarget.classList.toggle('hover');
    }

    render() {
		return (
            <div className="flip-container" onTouchStart={ (e) => this.toggleHover(e) }>
                <div className="flipper">
                    <div className="front">
                        <img src={this.props.oneRow.portada} alt="portada" />
                    </div>
                    <div className="back">
                        <h3>{this.props.oneRow.titulo}</h3>
                        <span>{this.props.oneRow.descripcion}</span>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    oneRow: PropTypes.object.isRequired,
};

export default Card;

/* this is functional component
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const card = (props) => {

    return (
        // <div className="flip-container">
        <div className="flip-container" onTouchStart={ (e) => { e.currentTarget.classList.toggle('hover'); } }>
            <div className="flipper">
                <div className="front">
                    <img src={props.oneRow.portada} alt="portada" />
                </div>
                <div className="back">
                    <h3>{props.oneRow.titulo}</h3>
                    <span>{props.oneRow.descripcion}</span>
                </div>
            </div>
        </div>
    );
}

card.propTypes = {
    oneRow: PropTypes.object.isRequired,
};

export default card;
*/