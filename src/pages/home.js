import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles({
    center: {
       textAlign: 'center',
    },
    marginBottum: {
        margin: '0 0 1rem 0',
    },
    container: {
        height: '100vh'
    }
});

function Home() {
    const classes = useStyles();

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
        <Container className={classes.container} maxWidth='md'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.center}>RESTful Weather</h1>
                    </Grid>
                <Grid item l={5}>
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
        </Container>
    )
}

export default Home;