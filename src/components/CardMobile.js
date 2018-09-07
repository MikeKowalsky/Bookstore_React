import React from 'react';

import PropTypes from 'prop-types';

import './CardMobile1.css';


const cardMobile = (props) => {
    console.log('mobile');
    // console.log(props.oneRow);
    // let showFront = true;
    // let cardView;

    // if(showFront){
    //     cardView = <div className="front">
    //                 <img src={props.oneRow.portada} alt="portada" />
    //             </div>
    // } else {
    //     cardView = <div className="back">
    //                     <h3>{props.oneRow.titulo}</h3>
    //                     <span>{props.oneRow.descripcion}</span>
    //                 </div>
    // }

    return (
        // <div className="flip-container-M">
        <div className="flip-container-M" onTouchStart={ () => {this.classList.toggle('hover').bind(this);} }>
        {/* <div className="flip-container" onClick={ () => { showFront = !showFront; }}> */}
            <div className="flipper-M">
                {/* {cardView} */}
                <div className="front-M">
                    <img src={props.oneRow.portada} alt="portada" />
                </div>
                <div className="back-M">
                    <h3>{props.oneRow.titulo}</h3>
                    <span>{props.oneRow.descripcion}</span>
                </div>
            </div>
        </div>
    );
}

cardMobile.propTypes = {
    oneRow: PropTypes.object.isRequired,
};

export default cardMobile;