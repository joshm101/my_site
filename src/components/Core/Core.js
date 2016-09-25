import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import {Router, Route, IndexRoute, Link} from 'react-router';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import Index from '../Index/Index';
import WorkItem from '../WorkItem/WorkItem';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();




export default class Core extends React.Component {
  render() {
    var workStyle = {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px"
    };
    
    var generalPageStyle = {
      height: "100%"
    }
    
    console.log("this.props Core: ", this.props);
    
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
                    }
                  ];

    return (
            <StyleRoot style={generalPageStyle}>
              <MuiThemeProvider>
                <div style={generalPageStyle}>
                  {this.props.children}
              {/*
                  <div style={workStyle}>
                    <WorkItem work={workArr[0]} />
                  </div>
                  <div style={workStyle}>
                    <WorkItem work={workArr[1]} />
                  </div>  */}
                </div>
              </MuiThemeProvider>
            </StyleRoot>
           )
  }
}