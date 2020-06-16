import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    h1: {
        textAlign: 'center',
    }
})

function Heading() {
    const classes = useStyles();

    return (
        <h1 className={classes.h1}>RESTful Weather</h1>
    )
}

export default Heading;