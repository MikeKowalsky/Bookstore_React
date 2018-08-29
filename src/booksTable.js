import React, { Component } from 'react';
// import './App.css';

class booksTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>idioma</th>
                        <th>portada</th>
                    </tr>
                </thead>
            </table>
        );
    }
}

export default booksTable;