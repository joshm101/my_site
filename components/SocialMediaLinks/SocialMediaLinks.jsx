/* Since there are different icon packs out there,
   it's hard to generalize a component like this by
   passing in the desired icons with props. Different
   icon packs are used in different ways so as much
   as I'd like to have a general purpose social
   media link component, that is kind of out of the
   scope for a project like this. */

import Radium from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';


class SocialMediaLinks extends React.Component {
  render() {
    var iconStyle = {
      color: "white",
      '@media (min-width: 600px)': {
        fontSize: "30px"
      },
      '@media (max-width: 599px)': {
        fontSize: "20px"
      },
      marginLeft: "5px",
      marginRight: "5px",
      fontWeight: "100"
    }
    var ulStyle = {
      listStyle: "none",
      paddingLeft: "0"
    }
    var liStyle = {
      display: "inline"
    }
    var anchorStyle = {
      textDecoration: "none"
    }
    return(
      <ul style={ulStyle}>
        <li style={liStyle}>
          <a href="mailto:jshm101@gmail.com" style={anchorStyle}>
            <i style={iconStyle} className={"icon-envelope"}>
            </i>   
          </a>
        </li>
        <li style={liStyle}>
          <a href="https://github.com/joshm101" style={anchorStyle}>
            <i style={iconStyle} className={"icon-social-github"}>
            </i>     
          </a>
        </li>
        <li style={liStyle}>
          <a href="https://soundcloud.com/lolfirewire" style={anchorStyle}>
            <i style={iconStyle} className={"icon-social-soundcloud"}>
            </i>            
          </a>
        </li>
        <li style={liStyle}>
          <a href="https://twitter.com/lolfirewire" style={anchorStyle}>
            <i style={iconStyle} className={"icon-social-twitter"}>
            </i>          
          </a>
        </li>
        <li style={liStyle}>
          <a href="https://www.linkedin.com/in/joshua-mora-11148b109" style={anchorStyle}>
            <i style={iconStyle} className={"icon-social-linkedin"}>
            </i>             
          </a>
        </li>
      </ul>
    );
  }
}

export default Radium(SocialMediaLinks);
