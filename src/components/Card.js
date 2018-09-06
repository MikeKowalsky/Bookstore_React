import React from 'react';

import PropTypes from 'prop-types';

import './Card.css';


const card = (props) => {
    // console.log(props.oneRow);

    // const handleAction;
    // if(window.innerWidth < 960){
    //     handleAction = () => {
            
    //     }
    // }

    return (
        <div className="flip-container" onTouchStart={ () => {this.classList.toggle('hover');} }>
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