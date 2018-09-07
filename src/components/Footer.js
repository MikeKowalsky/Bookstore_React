import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: '10px 0 5px 0',
    },
    typo: {
        margin: '0 auto',
    }
});

const footer = (props) => {
    const { classes } = props;

    return (
        <footer>
            <div className={ classes.root }> 
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography className={ classes.typo } variant="body1" color="primary">
                            &copy; 2018 SomeClient | All rights reserved
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </footer>
    );
}

footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(footer);