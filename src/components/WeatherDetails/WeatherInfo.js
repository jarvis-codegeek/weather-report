import { Grid, Paper } from '@material-ui/core'
import React from 'react'

const weatherInfo = (props) => {
    const { city, country, date, description, main, temp, highestTemp, lowestTemp, sunrise, sunset, clouds, humidity, wind } = props.weatherInfo
    return (
        <div>
            <div>
                <h2>{city}, {country}</h2>
                <h3>{date}</h3>
            </div>
            <Grid container>
                <Grid item><h3>{temp}</h3></Grid>
                <Grid item><h4>{description}</h4></Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3}><Paper><h3>{highestTemp}</h3><span>High</span></Paper></Grid>
                <Grid item xs={3}><Paper> </Paper></Grid>
                <Grid item xs={3}><Paper> </Paper></Grid>
                <Grid item xs={3}><Paper> </Paper></Grid>
                <Grid item xs={3}><Paper> </Paper></Grid>
            </Grid>
            
        </div>
    )
}

export default weatherInfo