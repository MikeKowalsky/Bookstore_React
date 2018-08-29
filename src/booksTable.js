import React from 'react';
import BooksRow from './BooksRow';

const booksTable = (props) => {

    // console.log(props.booksArray);
    // console.log(props.booksArray[0]);

    const styleTable = {
        border: '1px solid black',
        borderCollapse: 'collapse',
        margin: '20px auto'
    }
    
    const styleTh = {
        border: '1px solid black',
        padding: '5px',
    }
    
    const rowsArray = props.booksArray.map((row, index) => 
        <BooksRow
            key={index}
            oneRow={row} 
        />
    );

    return (
        <table style={styleTable}>
            <thead>
                <tr>
                    <th style={styleTh}>Titulo</th>
                    <th style={styleTh}>Idioma</th>
                    <th style={styleTh}>Portada</th>
                </tr>
            </thead>
            <tbody>
                {rowsArray}
            </tbody>
        </table>
    );

}

export default booksTable;