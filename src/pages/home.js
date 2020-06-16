import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Heading from '../components/heading';
import SearchField from '../components/searchField';
import SearchList from '../components/searchList';
import CurrentCard from '../components/currentCard';
import HourlyCard from '../components/hourlyCard';
import DailyCardBox from '../components/dailyCardBox';

function Home() {

    return (
        <Container maxWidth='lg'>
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
                    <HourlyCard/>
                    <h3>Daily Forcast:</h3>
                    <DailyCardBox/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;