import React from 'react';
import './Card.css';

const card = (props) => {

    // console.log(props.oneRow);

    return (
        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper">
                <div class="front">
                    <img src={props.oneRow.portada} alt="portada" />
                </div>
                <div class="back">
                    <h3>{props.oneRow.titulo}</h3>
                    <span>{props.oneRow.descripcion}</span>
                </div>
            </div>
        </div>
    );

}

export default card;