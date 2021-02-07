import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import WeatherInfo from '../components/WeatherDetails/WeatherInfo';
import {connect} from 'react-redux'
import {getWeatherDetailsData} from './reduxstore/selectors'
import {getWeatherDetails} from './reduxstore/actions'

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
  const currentDate = new Date(); 
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
        months[currentDate.getMonth()]
      }`;

class WeatherReportContainer extends React.Component {

    constructor(props){
        super(props);
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
        errorMessage: '',
        weatherInfo: null
    }

    getCityName = (e) => {
        this.setState({ cityName: e.target.value })
    }
    componentDidUpdate(prevProps) {
        if (this.props.weather_details !== prevProps.weather_details) {
            const { weather_details } = this.props
            if (weather_details !== (null || undefined)) {

                const weatherInfo = {
                    city: weather_details.data.name,
                    country: weather_details.data.sys.country,
                    date,
                    description: weather_details.data.weather[0].description,
                    main: weather_details.data.weather[0].main,
                    temp: weather_details.data.main.temp,
                    highestTemp: weather_details.data.main.temp_max,
                    lowestTemp: weather_details.data.main.temp_min,
                    clouds: weather_details.data.clouds.all,
                    humidity: weather_details.data.main.humidity,
                    wind: weather_details.data.wind.speed
                }
                this.setState({ weatherInfo: weatherInfo })
            }

        }
    }

    fetchAPI() {
        this.props.getWeatherDetails(this.state.cityName)
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
                    <CardHeader title="Weather Report" />
                    <CardContent>
                        <SearchBar fetchAPI={this.fetchAPI} getCityName={this.getCityName} />
                        {this.state.weatherInfo &&
                            <WeatherInfo weatherInfo={this.state.weatherInfo} />
                        }
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      weather_details: getWeatherDetailsData(state)
    }
  }  

export default connect(mapStateToProps,{getWeatherDetails})(WeatherReportContainer);