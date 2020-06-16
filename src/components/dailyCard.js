import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ReactComponent as SunSVG } from '../assests/SVGs/sun.svg';

const useStyles = makeStyles({
    dailyCard: {
        textAlign: 'center',
    }
})

function DailyCard() {
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.dailyCard}>
                <h4>Sat 13</h4>
                <p>63°</p>
                <SunSVG/>
            </CardContent>
        </Card>
    )
}

export default DailyCard;