import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    currentDescription: {

    }
})

function CurrentDescription() {
    const classes = useStyles();

    return (
        <h3 className={classes.currentDescription}>Sunny</h3>  
    )
}

export default CurrentDescription;