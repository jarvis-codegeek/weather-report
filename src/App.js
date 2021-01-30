import React from 'react'
import './App.css'
import Heading from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Row, Col} from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Heading firstName={"John"} />
        <div>
          <div>
            <SearchBar /> 
          </div>
          <div style={{"float": "left"}}>
            <Button variant="contained" color="primary">Search</Button>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default App;
