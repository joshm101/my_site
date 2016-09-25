import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import NavTabs from '../NavTabs/NavTabs';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


export default class Index extends React.Component {
  render() {
    console.log("this.props Index: ", this.props);
    var tabIndexState;
    if (this.props.location.pathname === "/") {
      tabIndexState = 0;
    } else {
      if (this.props.location.pathname === "/projects") {
        tabIndexState = 1;
      }
    }
    var landingBannerStyle = {
      backgroundColor: "#212121",
      width: "100%",
      height: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px -6px, rgba(0, 0, 0, 0.117647) 0px 1px -4px"
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
      verticalAlign: "middle",
      overflow: "overlay"

    };
    
    var subtitleStyle = {
      textAlign: "center",
      color: "white"
    }
    
    var socialMediaLinksStyle = {
      textAlign: "center",
      width: "100%",
      float: "left",
      left: "0",
      right: "0",
    };
    
    var CardTextCompStyle = {
      height: "100%"
    }
    
    return(
      <div style={{height: "100%"}}>
        <Card style={landingBannerStyle}>
          <CardText style={logoSpanWrap}>
            <div>
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
        <NavTabs history={this.props.history} location={this.props.location} tabIndexState={tabIndexState} />
      </div>
    );
  }
}