import React, { Component } from 'react';
import Cities from "./Cities";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
class CityOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                {value: "Toronto"},
                {value: "Los Angeles"},
                {value: "New York"},
                {value: "Chicago"},
                {value: "Phoenix"},
            ]
        };
      }
    render() { 
        const conditionalRender = () => {
            // if show weather = trues
            return (
                <div>show weather here </div>
            )
        }
        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));
        return ( 
            <React.Fragment>
                <div className="container-cities">
                <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
                    {this.state.cities.map((city) => (
                        //<Item>
                        <Cities 
                            getCity = {this.props.getCity}
                            city={city.value}
                            setCity={this.props.setCity}
                        />
                        //</Item>
                    ))}
                </Stack>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CityOptions;
