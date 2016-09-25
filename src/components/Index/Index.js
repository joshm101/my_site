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
    
    var workArr = [{
                        title: "Blackwashed.com",
                        description: "Portfolio for photo albums and videos. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        images: [
                                  {img_src: "../../assets/img/blackwashedcom.PNG",
                                   key: "0",
                                   current: 'true'},
                                  {img_src: "../../assets/img/blackwashedcom3.PNG",
                                   key: "1",
                                   current: 'false'},
                                  {img_src: "../../assets/img/blackwashedcom2.PNG",
                                   key: "2",
                                   current: 'false'}
                                  ],
                          workUrl: "http://blackwashed.com"
                        },
                        {
                          title: "somesite.com",
                          description: "short description of site that I made lorem ipsumshort description of site that I made lorem ipsum",
                          images: [
                            {img_src: "../../assets/img/1n1tiMo.png",
                             key: "0",
                             current: 'true'},
                            {img_src: "../../assets/img/2zJPaOJ.png",
                             key: '1',
                             current: 'false'}
                          ],
                          workUrl: "https://google.com"
                        },
{
                        title: "Blackwashed.com",
                        description: "Portfolio for photo albums and videos. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        images: [
                                  {img_src: "../../assets/img/blackwashedcom.PNG",
                                   key: "0",
                                   current: 'true'},
                                  {img_src: "../../assets/img/blackwashedcom3.PNG",
                                   key: "1",
                                   current: 'false'},
                                  {img_src: "../../assets/img/blackwashedcom2.PNG",
                                   key: "2",
                                   current: 'false'}
                                  ],
                          workUrl: "http://blackwashed.com"
                        },
                        {
                          title: "somesite.com",
                          description: "short description of site that I made lorem ipsumshort description of site that I made lorem ipsum",
                          images: [
                            {img_src: "../../assets/img/1n1tiMo.png",
                             key: "0",
                             current: 'true'},
                            {img_src: "../../assets/img/2zJPaOJ.png",
                             key: '1',
                             current: 'false'}
                          ],
                          workUrl: "https://google.com"
                        }                   
                      ];
    var landingBannerStyle = {
      backgroundColor: "#212121",
      width: "100%",
      height: "25%",
      minHeight: 200,
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
        <NavTabs history={this.props.history} location={this.props.location} tabIndexState={tabIndexState}
        works={workArr}/>
      </div>
    );
  }
}