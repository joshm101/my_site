import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

export default class BulletList extends React.Component {
  
  handleClick(key) {
    console.log("clicked slideshow");
    var current;
    console.log(this);
    this.props.onClickCb(key);
    
    //this.forceUpdate();
    // this.props.images[currentIndex].current = true;
  }
  
  render() {
    var liStyle = {display: 'inline',
               marginLeft: "2px",
               marginRight: "2px"};
    var _this = this;
    var bulletList = this.props.thisParent.props.images.map(function(image) {
     if (image.current === 'true') {
        return <li key={image.key} style={liStyle} onClick={_this.props.onClickCb(image.key)}>
                <i className="material-icons">lens</i>
               </li>
      } else {
       return <li key={image.key} style={liStyle} onClick={_this.props.onClickCb(image.key)}>
                 <i className="material-icons">panorama_fish_eye</i>
              </li>         
      }
    });
    return <div>{bulletList}</div>;
  }
};