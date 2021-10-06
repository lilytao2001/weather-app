import React, { Component } from 'react';
import CityOptions from './CityOptions';
import CurrentWeather from './CurrentWeather';
import Container from '@mui/material/Container';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() { 
        return ( 
            <React.Fragment>
                <div style={{  
                backgroundImage: "url(" + this.props.bg + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
                }}>
                <div className="container-header">Choose Your Location</div>
                <Container>
                <CityOptions
                    getCity = {this.props.city}
                    setCity = {this.props.setCity}
                />
                </Container>        
                {this.props.apiData.main ? (
                    <React.Fragment>
                        <CurrentWeather 
                            city = {this.props.city}
                            temp={this.props.temp}
                            min={this.props.min}
                            max={this.props.max}
                            feelsLike={this.props.feelsLike}
                            desc={this.props.desc}
                        />
                    </React.Fragment>
                ): <div> Loading </div>
                }
            </div>
            </React.Fragment>
         );
    }
}
 
export default Content;
