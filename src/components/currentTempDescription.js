import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    currentTemp: {

    },
    currentDescription: {

    }
})

function CurrentTempDescription() {
    const classes = useStyles();

    return (
        <Box>
            <h1 className={classes.currentTemp}>62°</h1>
            <h3 className={classes.currentDescription}>Sunny</h3>  
        </Box>
    )
}

export default CurrentTempDescription;