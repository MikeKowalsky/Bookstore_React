import React from 'react';
import logo from '../assets/logo.png';


const header = () => {

    const styles={
        root: {
            margin: '10px 10px 0 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        img: {
            width: '150px',
        }
    }

    return (
        <header style={styles.root}>
          <h1>Bookstore in React &amp;&amp; Material-UI</h1>
          <img style={styles.img} src={logo} alt="logo"/>
        </header>
    );

}

export default header;