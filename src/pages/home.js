import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
                    <Heading/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <SearchField/>
                    <SearchList/>
                </Grid>
                <Grid item md={9} xs={12}>
                    <CurrentCard/>
                    <HourlyCard/>
                    <DailyCardBox/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;