import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { ReactComponent as SunSVG } from '../assests/SVGs/sun.svg';
import { ReactComponent as CloudSVG } from '../assests/SVGs/cloud.svg';



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
    }
});

function Home() {
    const classes = useStyles();

    function FormDailyRow(){
        return (
            <React.Fragment>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.centerText}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.centerText}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.centerText}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.centerText}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.centerText}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent className={classes.centerText}>
                            <h4>Sat 13</h4>
                            <p>63°</p>
                            <SunSVG/>
                        </CardContent>
                    </Card>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <Container className={classes.container} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.centerText}>RESTful Weather</h1>
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
                    <Paper>
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
                    </Paper>
                </Grid>
                <Grid item md={9}>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid container item md={6} xs={12}>
                                    <Grid item xs={12}>
                                        <h2>Evanston, IL</h2>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Box m={0}>
                                            <h1>62°</h1>
                                            <h3>Sunny</h3>
                                        </Box>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Box m={0}>
                                            <p><span className={classes.bold}>High/Low:</span> 65°/56°</p>
                                            <p><span className={classes.bold}>Humidity:</span> 76%</p>
                                            <p><span className={classes.bold}>Wind:</span> 12mph</p>
                                            <p><span className={classes.bold}>UV Index:</span> 9 of 10</p>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.centerText}>
                                    <SunSVG style={{ width: '50%' }}/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <h3>Hourly Forcast:</h3>
                    <Card>
                        <CardContent>
                            <Grid container spacing={5}>
                                <Grid item xs={2}>
                                    <Box className={classes.centerText}>
                                        <h4>1pm</h4>
                                        <p>63°/43°</p>
                                        <CloudSVG/>
                                    </Box>
                                </Grid>
                                {/* <Divider orientation='vertical' flexItem='true'/> */}
                                <Grid item xs={2}>
                                    <Box className={classes.centerText}>
                                        <h4>1pm</h4>
                                        <p>63°/43°</p>
                                        <CloudSVG/>
                                    </Box>
                                </Grid>
                                {/* <Divider orientation='vertical' flexItem='true'/> */}
                                <Grid item xs={2}>
                                    <Box className={classes.centerText}>
                                        <h4>1pm</h4>
                                        <p>63°/43°</p>
                                        <CloudSVG/>
                                    </Box>
                                </Grid>
                                {/* <Divider orientation='vertical' flexItem='true'/> */}
                                <Grid item xs={2}>
                                    <Box className={classes.centerText}>
                                        <h4>1pm</h4>
                                        <p>63°/43°</p>
                                        <CloudSVG/>
                                    </Box>
                                </Grid>
                                {/* <Divider orientation='vertical' flexItem='true'/> */}
                                <Grid item xs={2}>
                                    <Box className={classes.centerText}>
                                        <h4>1pm</h4>
                                        <p>63°/43°</p>
                                        <CloudSVG/>
                                    </Box>
                                </Grid>
                                {/* <Divider orientation='vertical' flexItem='true'/> */}
                                <Grid item xs={2}>
                                    <Box className={classes.centerText}>
                                        <h4>1pm</h4>
                                        <p>63°/43°</p>
                                        <CloudSVG/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
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