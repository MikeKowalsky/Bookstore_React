import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import picture from '../assets/modalPict.jpg';

const styles = theme => ({
    root: {
        width: '100%',
        height: 350,
        [theme.breakpoints.down('sm')]: {
            height: 200,
        },
    },
    image: {
        objectFit: 'cover'
    }
});

const modal = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <img className={classes.image} src={picture} alt="logo"/>
        </div>
    );
}

modal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(modal);