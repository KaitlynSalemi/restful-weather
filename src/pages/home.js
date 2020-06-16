import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Heading from '../components/heading';
import SearchField from '../components/searchField';
import SearchList from '../components/searchList';
import CurrentCard from '../components/currentCard';
import HourlyBox from '../components/hourlyBox';
import DailyCard from '../components/dailyCard';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';




const useStyles = makeStyles({
    centerText: {
       textAlign: 'center',
    },
    centerContent: {
        margin: '0 auto',
    },
    marginBottum: {
        margin: '0 0 1rem 0',
    },
    container: {
        height: '100vh',
    },
    widthFill: {
        width: '100%',
    },
    verticalAlign: {
        margin: 'auto 0',
    },
    bold: {
        fontWeight: 'bold'
    },
    inline: {
        display: 'inline-block',
    },
    currentWeatherSVG: {
        textAlign: 'center',
        margin: 'auto 0',
    }
});

function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Heading />
                </Grid>
                <Grid item md={3} xs={12}>
                    <SearchField/>
                    <Hidden smDown>
                        <SearchList/>
                    </Hidden>
                </Grid>
                <Grid item md={9} xs={12}>
                    <CurrentCard/>
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
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;