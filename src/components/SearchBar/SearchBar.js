import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchBar.css'


const SearchBar = () => {
  let optionsArr = [{
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

    return(
    <div className="autocomplete">
    <Autocomplete
        id="city"
        freeSolo
        options={optionsArr.map((city) => city.name)}
        renderInput={(params) => (
          <TextField {...params} label="Enter City...." margin="normal" variant="outlined" />
        )}
      />
      </div>
    )
}

export default SearchBar;