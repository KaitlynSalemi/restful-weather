import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    currentCity: {

    }
})

function CurrentCity() {
    const classes = useStyles();

    return (
        <h2 className={classes.currentCity}>Evanston, IL</h2>
    )
}

export default CurrentCity;
