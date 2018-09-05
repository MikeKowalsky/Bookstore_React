import React from 'react';
import './Card.css';

const card = (props) => {

    // console.log(props.oneRow);

    return (
        <div className="flip-container" onTouchStart={() => {this.classList.toggle('hover');}}>
        {/* <div className="flip-container" onTouchStart={function() {this.classList.toggle('hover');}}> */}
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

export default card;