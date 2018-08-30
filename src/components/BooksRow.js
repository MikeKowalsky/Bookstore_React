import React from 'react';

const booksRow = (props) => {

    // console.log(props.oneRow);

    const style = {
        border: '1px solid black',
        padding: '5px',
	}

    return (
        <tr>
            <td style={style}>{props.oneRow.titulo}</td>
            <td style={style}>{props.oneRow.idioma}</td>
            <td style={style}>{props.oneRow.portada}</td>
        </tr>
    );
}

export default booksRow;