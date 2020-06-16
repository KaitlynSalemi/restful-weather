import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HourlyBox from '../components/hourlyBox';


function HourlyCard() {

    return (
        <div>
            <h3>Hourly Forcast:</h3>
            <Card>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item sm={2} xs={4}>
                            <HourlyBox/>
                        </Grid>
                        <Grid item sm={2} xs={4}>
                            <HourlyBox/>
                        </Grid>
                        <Grid item sm={2} xs={4}>
                            <HourlyBox/>
                        </Grid>
                        <Grid item sm={2} xs={4}>
                            <HourlyBox/>
                        </Grid>
                        <Grid item sm={2} xs={4}>
                            <HourlyBox/>
                        </Grid>
                        <Grid item sm={2} xs={4}>
                            <HourlyBox/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default HourlyCard;