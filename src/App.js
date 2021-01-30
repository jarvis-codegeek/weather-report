import React from 'react'
import './App.css'
import {Heading , SubTitle} from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'

class App extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    age: 0,
    response: null,
    error: null,
    cityName:"Delhi"
  }

  fetchAPI(){
    let APIkey = "33ba6a50df2537ca158f0524def69053"
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=${APIkey}&units=metric`;
    axios.get(weather)
    that = this
    .then(function (res) {
      // handle success
      this.setState({response: res})
      console.log("response", res);
    })
    .catch(function (err) {
      // handle error
      if(err !== (null || undefined)){
        this.setState({error: err})
      }
    }).bind(this)
  }

  render() {
    return (
      <React.Fragment>
          <Heading title = {"Weather Report"}/>
          <SearchBar fetchAPI = {this.fetchAPI} />
          <SubTitle />
      </React.Fragment>
    )
  }

}

export default App;
