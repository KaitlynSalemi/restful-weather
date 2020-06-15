import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function Home() {

    function Form7DayRow(){
        return (
            <React.Fragment>
                <Grid item l={1}>
                    <Paper>Sat 13th</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>Sat 13th</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>Sat 13th</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>Sat 13th</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>Sat 13th</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>Sat 13th</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>Sat 13th</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    function FormHourlyRow(){
        return (
            <React.Fragment>
                <Grid item l={1}>
                    <Paper>1pm</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>2pm</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>3pm</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>4pm</Paper>
                </Grid>
                <Grid item l={1}>
                    <Paper>5pm</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1>RESTful Weather</h1>
                </Grid>
            <Grid item l={5}>
                <form>
                    <TextField id="standard-basic" label="Search" />
                </form>
                <Paper>
                    Los Angeles, CA
                    New York, NY
                    Chicago, IL
                    London, England
                    Toykyo, Japan
                </Paper>
            </Grid>
            <Grid item l={7}>
                <Paper>Current Weather</Paper>
                <h3>Hourly Forcast:</h3>
                <Grid container item xs={12}>
                    <FormHourlyRow />
                </Grid>
                <h3>7-Day Forcast:</h3>
                <Grid container item xs={12}>
                    <Form7DayRow />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;