import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    currentConditons: {

    },
    span: {
        fontWeight: 'bold',
    }
})

function CurrentConditions() {
    const classes = useStyles();

    return (
        <Box>
            <p className={classes.currentConditions}>
                <span className={classes.span}>High/Low: </span> 
                65°/56°
            </p>
            <p className={classes.currentConditions}>
                <span className={classes.span}>Humidity: </span> 
                76%
            </p>
            <p className={classes.currentConditions}>
                <span className={classes.span}>Wind: </span> 
                12mph
            </p>
            <p className={classes.currentConditions}>
                <span className={classes.span}>UV Index: </span> 
                9 of 10
            </p>
        </Box>
    )
}

export default CurrentConditions;