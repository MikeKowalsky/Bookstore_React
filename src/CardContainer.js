import React from 'react';
import Card from './Card';

const cardContainer = (props) => {

    // console.log(props.booksArray[0]);

    const cards = props.booksArray.map((row, index) => 
        <Card
            key={index}
            oneRow={row} 
        />
    );

    const style = {
        padding: '10px',
        marginTop: '10px',
        border: '2px solid red',
        borderRadius: '10px',
        display: "flex",
        flexWrap: "wrap",
    }

    return (
        <div style={style}>
            {cards}
        </div>
    );

}

export default cardContainer;