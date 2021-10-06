import React, { Component } from 'react';
import "./Styles.css";

class CurrentWeather extends Component {
    state = { 
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="weather" >
                    <div className="city">{this.props.city}</div>
                    <div className="temp">{this.props.temp}°C</div>
                    <div className="weather-high-low">H={this.props.max}°C L={this.props.min}°C</div>
                    <div className="weather-high-low">{this.props.desc}</div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CurrentWeather;
