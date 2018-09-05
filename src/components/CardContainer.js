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
        padding: 10,
        margin: 10,
        border: '2px solid #3f51b5',
        borderRadius: '10px',
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    }

    return (
        <div style={style}>
            {cards}
        </div>
    );
}

export default cardContainer;