import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Index extends React.Component {
  render() {
    var landingBannerStyle = {
      backgroundColor: "#212121",
      width: "100%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    };
    
    var logoNameStyle = {
      color: "white",
      fontWeight: "400",
      fontSize: "40px",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)"      
    };
    
    var logoNameWrap = {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: 'center',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "middle",      
    };
    
    var logoSpanWrap = {
      margin: "auto",
      textAlign: "center",
      verticalAlign: "middle"

    };
    
    var subtitleStyle = {
      textAlign: "center",
      color: "white"
    }
    
    var socialMediaLinksStyle = {
      position: "absolute",
      textAlign: "center",
      bottom: "0",
      width: "100%",
      float: "left",
      left: "0",
      right: "0"
    };
    
    var CardTextCompStyle = {
      height: "100%"
    }
    
    return(
      <Card style={landingBannerStyle}>
        <CardText>  
          <div style={logoSpanWrap}>
            <span style={logoNameStyle}>
              Joshua Mora
            </span>     
          </div>
          <div style={subtitleStyle}>
            <span>Developer &nbsp;/&nbsp; Producer</span>
          </div>   
          <div style={socialMediaLinksStyle}>
            <SocialMediaLinks />
          </div>                
        </CardText>
      </Card>
    );
  }
}