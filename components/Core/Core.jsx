import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.jsx';
import Hello from '../../hello.jsx';



class Core extends React.Component {
  render() {
    var imageArr = [
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
             ];

    return <ImageSlideshow images={imageArr}></ImageSlideshow>;
  }
}

ReactDOM.render(<Core/>, document.getElementById("core"));