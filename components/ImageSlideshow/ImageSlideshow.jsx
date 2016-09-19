import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';



export default class ImageSlideshow extends React.Component {

  handleClick(key) {
    var _this = this;
    
    // move to image given by key (index)
    this.refs.reactSwipe.slide(key, 300);
  }
  
  render() {
    
    // set size of image slideshow
    // utilizes TRUE 16:9 ratios
    var style = {
      height: "144px",
      width: "256px"
    }
    
    // remove styling from <ul>
    // and also position it on top
    // of the slideshow itself.
    var bulletListStyle = {
      listStyle: "none",
      paddingLeft: "0",
      textAlign: "center",
      position: "relative",
      bottom: "40px"
    }
    
    // we want our circles/bubbles to be displayed inline
    // to create a horizontal list. Also sets shadow/outline
    // so they're visible even with a light background
    var liStyle = {display: 'inline',
                   marginLeft: "2px",
                   marginRight: "2px",
                   color: "rgb(255, 255, 255)",
                   textShadow: "-1px 1px 0px rgba(0, 0, 0, 1)"};
    
    // create each of the img elements for the slideshow
    var imageElements = this.props.images.map(function(image) {
      return (
        <div key={image.key} className="ImageSlideshow-image-wrap">
          <img style={style} key={image.key} className="ImageSlideshow-image" src={image.img_src}></img>
        </div>
      )
    });
    
    var swipeOptions = {
      continuous: false,
      callback: function() {
        // callback function that is triggered
        // whenever the image slide changes
        
        // get new position
        var newIndex = _this.refs.reactSwipe.getPos();
        
        // iterate through the images and set the
        // appropriate image object as the "current"
        // image
        _this.props.images.map(function(image) {
          if (parseInt(image.key) === newIndex) {
            _this.props.images[image.key].current = 'true';
          } else {
            _this.props.images[image.key].current = 'false';
          }
        });
        
        // set the state to trigger a rerender.
        // this rerender is key to synchronizing the images
        // and selection circles/bubbles
        _this.setState(_this.props.images);
      }
    };    
    
    var _this = this;
    
    // create the circle/bubble elements
    var bulletList = this.props.images.map(function(image) {
       if (image.current === 'true') {
         
         // if we are at current image, icon is solid circle
         return <li key={image.key} style={liStyle} onClick={_this.handleClick.bind(_this,              image.key)}>
                  <i className="material-icons">lens</i>
                 </li>
       } else {
         
         // if not current image, icon is open circle
         return <li key={image.key} style={liStyle} onClick={_this.handleClick.bind(_this,              image.key)}>
                   <i className="material-icons">panorama_fish_eye</i>
                </li>         
       }

    });
    

    return (
      <div className="ImageSlideshow-content-wrap" style={style}>
        <ReactSwipe swipeOptions={swipeOptions} ref="reactSwipe">{imageElements}</ReactSwipe>
        <ul style={bulletListStyle} className="ImageSlideshow-nav-list">
          {bulletList}
        </ul>
      </div>            
    );
  }
}

