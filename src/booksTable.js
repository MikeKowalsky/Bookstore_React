import React from 'react';
import BooksRow from './BooksRow';

const booksTable = (props) => {

    // console.log(props.booksArray);
    // console.log(props.booksArray[0]);

    const style = {
        table: {
            border: '1px solid black',
            borderCollapse: 'collapse',
            margin: '20px auto'
        },
        th: {
            border: '1px solid black',
            padding: '5px',
        }
    }
    
    const rowsArray = props.booksArray.map((row, index) => 
        <BooksRow
            key={index}
            oneRow={row} 
        />
    );

    return (
        <table style={style.table}>
            <thead>
                <tr>
                    <th style={style.th}>Titulo</th>
                    <th style={style.th}>Idioma</th>
                    <th style={style.th}>Portada</th>
                </tr>
            </thead>
            <tbody>
                {rowsArray}
            </tbody>
        </table>
    );

}

export default booksTable;