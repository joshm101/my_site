import React from 'react';
import ReactDOM from 'react-dom';
import WorkItem from '../WorkItem/WorkItem.jsx';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.jsx';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import Hello from '../../hello.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();




class Core extends React.Component {
  render() {
    var workStyle = {
      marginLeft: "auto",
      marginRight: "auto"
    }
    
    var workArr = [{title: "Blackwashed.com",
                    description: "Portfolio for photo albums and videos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    images: [
                              {img_src: "../../assets/img/n8iaOQw.jpg",
                               key: "0",
                               current: 'true'},
                              {img_src: "../../assets/img/town.jpg",
                               key: "1",
                               current: 'false'},
                              {img_src: "../../assets/img/gJB0DJs.jpg",
                               key: "2",
                               current: 'false'},
                              {img_src: "../../assets/img/rvKm09g.jpg",
                               key: "3",
                               current: 'false'}
                              ],
                      workUrl: "http://blackwashed.com"
                    }];

    return (<MuiThemeProvider style={workStyle}>
              <div style={workStyle}>
                <WorkItem work={workArr[0]}>
                </WorkItem>
              </div>
            </MuiThemeProvider>);
  }
}

ReactDOM.render(<Core/>, document.getElementById("core"));