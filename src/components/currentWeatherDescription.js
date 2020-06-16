import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    currentWeatherDescription: {

    }
})

function CurrentWeatherDescription() {
    const classes = useStyles();

    return (
        <h3 className={classes.currentWeatherDescription}>Sunny</h3>  
    )
}

export default CurrentWeatherDescription;