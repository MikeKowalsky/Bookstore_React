import React from 'react';

const booksRow = (props) => {

    // console.log(props.oneRow);

    const styleTd = {
        border: '1px solid black',
        padding: '5px',
	}

    return (
        <tr>
            <td style={styleTd}>{props.oneRow.titulo}</td>
            <td style={styleTd}>{props.oneRow.idioma}</td>
            <td style={styleTd}>{props.oneRow.portada}</td>
        </tr>
    );

}

export default booksRow;