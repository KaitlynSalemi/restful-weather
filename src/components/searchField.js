import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles ({
    form: {
        textAlign: 'center',
    },
    textField: {
        margin: '0 0 1rem 0',
    }
})

function SearchField() {
    const classes = useStyles();

    return (
        <form className={classes.form}>
            <TextField 
                className={classes.textField}
                id="standard-basic" 
                label="Search" 
                InputProps={{
                    endAdornment: <InputAdornment position="end"><Button><SearchIcon /></Button></InputAdornment>,
                }} 
            />
        </form>
    )
}

export default SearchField;