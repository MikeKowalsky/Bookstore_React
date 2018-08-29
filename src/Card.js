import React from 'react';

const card = (props) => {

    // console.log(props.oneRow);

    const style = {
        cardDiv:{
            height: '500px',
            maxWidth: '200px',
            border: '1px solid black',
            borderRadius: "5px",
            boxShadow: '5px 5px red',
            padding: '10px',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        span: {
            margin: '5px 0',
            textAlign: 'justify',
        },
        img:{
            maxWidth: '70%',
        }
	}

    return (
        <div style={style.cardDiv}>
            <h3>{props.oneRow.titulo}</h3>
            <span style={style.span}>{props.oneRow.descripcion}</span>
            <img src={props.oneRow.portada} alt="portada" style={style.img} />
        </div>
    );

}

export default card;