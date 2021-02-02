import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './SearchBar.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();
  let cityList = [{
    name: "Bangalore"
  }, {
    name: "Delhi"
  },
  {
    name: "Hyderabad"
  },
  {
    name: "Chennai"
  }]

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
            <Autocomplete
              id="city"
              freeSolo
              options={cityList.map((city) => city.name)}
              onSelect={props.getCityName}
              renderInput={(params) => (
                <TextField {...params} label="Enter City...." margin="normal"  onChange={props.getCityName} variant="outlined" />
              )}
            />
          
        </Grid>
        <Grid item xs>
            <Button className="mt-4" variant="contained" color="primary" onClick={() => props.fetchAPI()}>Search</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchBar;