import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DailyCard from '../components/dailyCard';

function DailyCardBox() {

    return (
        <Box>
            <h3>Daily Forcast:</h3>
            <Grid container spacing={1}>
                <Grid item sm={2} xs={4}>
                    <DailyCard/>
                </Grid>
                <Grid item sm={2} xs={4}>
                    <DailyCard/>
                </Grid>
                <Grid item sm={2} xs={4}>
                    <DailyCard/>
                </Grid>
                <Grid item sm={2} xs={4}>
                    <DailyCard/>
                </Grid>
                <Grid item sm={2} xs={4}>
                    <DailyCard/>
                </Grid>
                <Grid item sm={2} xs={4}>
                    <DailyCard/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default DailyCardBox;