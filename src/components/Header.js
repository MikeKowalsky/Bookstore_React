import React from 'react';
import logo from '../assets/booksSM.jpg';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imgDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    img: {
        width: 300,
        align: 'right',

    },
    appBarDiv: {
        width: '100%',
        margin: '20px 0',
    },
    typo: {
        margin: '0 auto',
        textAlign: 'center',
        lineHeight: 1.4,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.8em',
        },
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
        <header className={ classes.root }>
            <img className={ classes.img } src={ logo } alt="logo" />

            <div className={ classes.appBarDiv } >
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography className={ classes.typo } variant="display2" color="primary">
                            Bookstore in React with Material-UI
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

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