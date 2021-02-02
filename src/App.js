import React from 'react'
import './App.css'
import { Heading, SubTitle } from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Card, CardHeader, CardContent } from '@material-ui/core';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.fetchAPI = this.fetchAPI.bind(this)
  }



  state = {
    firstName: "",
    lastName: "",
    age: 0,
    response: null,
    error: null,
    cityName: "",
    showError: false,
    errorMessage: ''
  }

  getCityName = (e) => {
    this.setState({ cityName: e.target.value })
  }

  fetchAPI() {
    let APIkey = "33ba6a50df2537ca158f0524def69053"
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=${APIkey}&units=metric`;
    axios.get(weather)
      .then((res) => {
        // handle success
        this.setState({ response: res })
        console.log("response", res);
      })
      .catch((err) => {
        // handle error
        this.setState({ errorMsg: 'Error occured', showError: true })
      })
  }

  renderPopup = () => {
    return (
      <Dialog onClose={this.handleClose} open={this.state.showError} fullWidth={true}>
        <DialogTitle id="simple-dialog-title" className="title">Alert</DialogTitle>
        <div className="error-msg ml-4">{this.state.errorMsg}</div>
      </Dialog>
    )
  }

  handleClose = () => {
    this.setState({ showError: false })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showError && this.renderPopup()}
        <Card>
          <CardHeader title="Weather Report"/>
          <CardContent>
            <SearchBar fetchAPI={this.fetchAPI} getCityName={this.getCityName} />
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }

}

export default App;
