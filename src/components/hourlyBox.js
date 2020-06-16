import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { ReactComponent as CloudSVG } from '../assests/SVGs/cloud.svg';

const useStyles = makeStyles ({
    hourlyBox: {
        textAlign: 'center',
    }
})

function HourlyBox() {
    const classes = useStyles();

    return (
        <Box className={classes.hourlyBox}>
            <h4>1pm</h4>
            <p>63°/43°</p>
            <CloudSVG/>
        </Box>
    )
}
export default HourlyBox;