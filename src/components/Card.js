import React from 'react';

import PropTypes from 'prop-types';

import './Card.css';


const card = (props) => {

    return (
        // <div className="flip-container">
        <div className="flip-container" onTouchStart={ () => { this.classList.toggle('hover'); } }>
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



// this is classComponent
/* 

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './Card.css';


// const card = (props) => {
class Card extends Component {

    // console.log(props.oneRow);
    // constructor (props) {
	// 	super(props);
	// }

    // const handleAction;
    // if(window.innerWidth < 960){
    //     handleAction = () => {
            
    //     }
    // }
    // const myFunc = () => 

    // toggleHover:

    render(){
		return (
            // <div className="flip-container">
            <div className="flip-container" onTouchStart={ () => {this.classList.toggle('hover');} }>
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

export default Card; */