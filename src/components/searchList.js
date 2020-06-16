import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';


function SearchList(){

    return (
        <Hidden smDown>
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
        </Hidden>
    )
}

export default SearchList;