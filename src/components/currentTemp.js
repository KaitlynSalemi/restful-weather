import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    currentTemp: {

    }
})

function CurrentTemp() {
    const classes = useStyles();

    return (
        <h1 className={classes.currentTemp}>62°</h1>
    )
}

export default CurrentTemp;