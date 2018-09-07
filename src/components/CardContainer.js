import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';

const styles = {
    root:{
        padding: 10,
        margin: 10,
        border: '2px solid #3f51b5',
        borderRadius: '10px',
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    }
}

const cardContainer = (props) => {
    const  { classes } = props;
    // console.log(props.booksArray[0]);

    const cards = props.booksArray.map((row, index) => 
        <Card
            key = { index }
            oneRow = { row } 
        />
    );

    return (
        <div className={ classes.root }>
            { cards }
        </div>
    );
}

cardContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    booksArray: PropTypes.array.isRequired,
};

export default withStyles(styles)(cardContainer);