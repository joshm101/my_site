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

import IconButton from 'material-ui/IconButton';


class SocialMediaLinks extends React.Component {
  render() {
    var iconStyle = {
      color: "white",
    }
    var ulStyle = {
      listStyle: "none",
      paddingLeft: "0",
      display: "inline-block"
    }
    var liStyle = {
      float: "left"
    }
    var anchorStyle = {
      textDecoration: "none"
    }
    return(
      <ul style={ulStyle}>
        <li style={liStyle}>
            <IconButton iconStyle={iconStyle} iconClassName={"icon-envelope"} href="mailto:jshm101@gmail.com">
            </IconButton>   
        </li>
        <li style={liStyle}>
            <IconButton iconStyle={iconStyle} iconClassName={"icon-social-github"} href="https://github.com/joshm101">
            </IconButton>     
        </li>
        <li style={liStyle}>
            <IconButton iconStyle={iconStyle} iconClassName={"icon-social-soundcloud"} href="https://soundcloud.com/lolfirewire">
            </IconButton>            
        </li>
        <li style={liStyle}>
            <IconButton iconStyle={iconStyle} iconClassName={"icon-social-twitter"} href="https://twitter.com/lolfirewire">
            </IconButton>          
        </li>
        <li style={liStyle}>
            <IconButton iconStyle={iconStyle} iconClassName={"icon-social-linkedin"} href="https://www.linkedin.com/in/joshua-mora-11148b109">
            </IconButton>             
        </li>
      </ul>
    );
  }
}

export default Radium(SocialMediaLinks);
