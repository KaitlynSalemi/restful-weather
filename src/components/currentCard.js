import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CurrentCity from './currentCity';
import CurrentTemp from './currentTemp';
import CurrentDescription from './currentDescription';
import CurrentConditions from './currentConditions';
import CurrentSVG from './currentSVG';

const useStyles = makeStyles({
    currentWeatherSVG: {
        textAlign: 'center',
        margin: 'auto 0',
    }
})

function CurrentCard() {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid container item xs={6}>
                        <Grid item xs={12}>
                            <CurrentCity/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <CurrentTemp/>
                            <CurrentDescription/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <CurrentConditions/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} className={classes.currentWeatherSVG}>
                        <CurrentSVG/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CurrentCard;