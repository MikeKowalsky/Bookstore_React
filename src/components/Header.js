import React from 'react';
// import logo from '../assets/logo.png';
import logo from '../assets/booksSM.jpg';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px 10px 0 10px',
    },
    imgDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    img: {
        width: '300px',
        align: 'right',

    },
    h1: {
        textAlign: 'center'
    }
});

const header = (props) => {

    const { classes } = props;

    // const styles={
    //     root: {
    //         margin: '10px 10px 0 10px',
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //     },
    //     img: {
    //         width: '150px',
    //     }
    // }

    return (
        <header className={classes.root}>
            <h1 className={classes.h1}>Bookstore in React &amp;&amp; Material-UI</h1>
            <img className={classes.img} src={logo} alt="logo"/>
        </header>
        // <header style={styles.root}>
        //     <h1>Bookstore in React &amp;&amp; Material-UI</h1>
        //     <img style={styles.img} src={logo} alt="logo"/>
        // </header>
    );

}

header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(header);
// export default header;