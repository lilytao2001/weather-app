import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./Styles.css";
class Cities extends Component {
    state = { 
     }
    render() { 
        const theme = createTheme({
            palette: {
              primary: {
                main: "#ffffff",
              },
            },
          });
        return ( 
            <React.Fragment>
                <ThemeProvider theme={theme}>
                <Button 
                    variant="text"
                    size = "large"
                    className="cards"
                    color="primary"
                    id = "location-name"
                    onClick = {this.props.setCity}
                    key = {this.props.city}
                    value = {this.props.city}
                >
                           {this.props.city}
                </Button>
                </ThemeProvider>
            </React.Fragment>
         );
    }
}
 
export default Cities;