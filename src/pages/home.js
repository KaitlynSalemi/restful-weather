import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { ReactComponent as SunSVG } from '../assests/SVGs/sun.svg';



const useStyles = makeStyles({
    center: {
       textAlign: 'center',
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
    }
});

function Home() {
    const classes = useStyles();

    function FormDailyRow(){
        return (
            <React.Fragment>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.center}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.center}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.center}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.center}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.center}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.center}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
            </React.Fragment>
        );
    }

    function FormHourlyRow(){
        return (
            <React.Fragment>
                <Grid item l={1}>
                    <Card>1pm</Card>
                </Grid>
                <Grid item l={1}>
                    <Card>2pm</Card>
                </Grid>
                <Grid item l={1}>
                    <Card>3pm</Card>
                </Grid>
                <Grid item l={1}>
                    <Card>4pm</Card>
                </Grid>
                <Grid item l={1}>
                    <Card>5pm</Card>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <Container className={classes.container} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.center}>RESTful Weather</h1>
                    </Grid>
                <Grid item md={3}>
                    <form>
                        <TextField 
                            className={classes.marginBottum}
                            id="standard-basic" 
                            label="Search" 
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><Button><SearchIcon /></Button></InputAdornment>,
                            }} 
                        />
                    </form>
                    <Card>
                        <CardContent>
                            <List>
                                <ListItem button>
                                    <ListItemText primary="Los Angeles, CA" />
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText primary="New York, NY" />
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText primary="Chicago, IL" />
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText primary="London, England" />
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText primary="Toykyo, Japan" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={9}>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item md={7} sx={12}>
                                    <h2>Evanston, IL</h2>
                                    <h1>62°</h1>
                                    <h3>Sunny</h3>
                                    <p><span className={classes.bold}>High/Low:</span> 65°/56°</p>
                                    <p><span className={classes.bold}>Humidity:</span> 76%</p>
                                    <p><span className={classes.bold}>Wind:</span> 12mph</p>
                                    <p><span className={classes.bold}>UV Index:</span> 9 of 10</p>
                                </Grid>
                                <Grid item md={5} sx={12} className={classes.verticalAlign}>
                                    <SunSVG />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <h3>Hourly Forcast:</h3>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormHourlyRow />
                        </Grid>
                    </Grid>
                    <h3>Daily Forcast:</h3>
                    <Grid container spacing={1}>
                        <FormDailyRow />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;