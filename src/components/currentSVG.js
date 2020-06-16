import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as SunSVG } from '../assests/SVGs/sun.svg';
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    currentSVG: {
        width: '50%',
    },
})

function CurrentSVG() {
    const classes = useStyles();

    return (
        <SunSVG className={classes.currentSVG}/>
    )
}

export default CurrentSVG;