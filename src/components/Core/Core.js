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