import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const footer = () => {
    
    const styles = {
        root: {
          flexGrow: 1,
          marginTop: 10,
        },
        typo: {
            margin: '0 auto',
        }
    };

    return (
        <footer style={styles.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography style={styles.typo} variant="body1" color="inherit">
                            &copy; 2018 SomeClient | All rights reserved
                        </Typography>
                    </Toolbar>
                </AppBar>
        </footer>
    );

}

export default footer;