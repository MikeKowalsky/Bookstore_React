import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    p: {
        margin: '15px 0 -5px 0',
        color: '#3f51b5',
        fontWeight: 'bold',
        fontSize: '1.5em',
    },
    btn: {
        marginTop: 15,
        padding: '0 10px',
        [theme.breakpoints.down('sm')]: {
          marginTop: 30
        },
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '30px 0',
    },
    textField: {
        marginTop: 10,
        width: 200,
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
    }
});

const navigation = (props) => {
    const { classes } = props;

    return (
        <Grid className={ classes.container } container>

            <Grid item xs={ 12 } sm={ 4 } className={ classes.gridItem }>
                <p className={classes.p}>Our catalog:</p>
            </Grid>

            <Grid item xs={ 12 } sm={ 4 } className={ classes.gridItem }>
                <form>
                    <TextField
                        id="search"
                        label="Search field"
                        type="search"
                        className={ classes.textField }
                        onChange={ (e) => props.changed(e) } />
                </form>
            </Grid>

            <Grid item xs={ 12 } sm={ 4 } className={ classes.gridItem }>
                <Button 
                    variant="outlined" 
                    color="primary"
                    size="small" 
                    onClick={ () => props.clicked() }
                    className={ classes.btn }>
                    Switch table/cards
                </Button>
            </Grid>

        </Grid>
    );
}

navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    changed: PropTypes.func.isRequired,
    clicked: PropTypes.func.isRequired,
};

export default withStyles(styles)(navigation);