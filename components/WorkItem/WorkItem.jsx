import React from "react";
import ReactDOM from "react-dom";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Toggle from 'material-ui/Toggle';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.jsx'

export default class WorkItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  
  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  };
  
  handleExpand() {
    console.log("expanded: true");
    this.setState({expanded: true});
  };
  
  handleReduce() {
    this.setState({expanded: false});
  };
  
  navigateTo() {
    //window.location.href = this.props.work.workUrl;
  };
  
  render() {
    var cardStyle = {
      width: "256px",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto"
    };
    
    var fabStyle = {
      position: "absolute",
      right: "10px",
      top: "123px",
      zIndex: "10000"
    }
    
    var showStyle = {
      marginLeft: "25%",
      marginRight: "25%"
    };
    return(
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={cardStyle}>
        <CardMedia>
          <ImageSlideshow images={this.props.work.images} />
        </CardMedia>
        <FloatingActionButton style={fabStyle}
                              zDepth={3}
                              mini={true}
                              backgroundColor="#009688"
                              onTouchTap={this.navigateTo.bind(this)}>
          <NavigationArrowForward />
        </FloatingActionButton>
        <CardTitle title={this.props.work.title} />
        <CardText expandable={true}>                              {this.props.work.description}
        </CardText>
        <CardActions>
      
        // Seems state starts as true even though the
        // constructor sets expanded to false. Utilizing
        // negation offer fixes for now. Need to figure out
        // why this.state.expanded is not properly set by
        // constructor.
        {!this.state.expanded ? 
            <FlatButton label="Show more" onTouchTap={this.handleExpand.bind(this)}
            style={showStyle} /> 
          :
            <FlatButton onTouchTap={this.handleReduce.bind(this)} label="Show less"
            style={showStyle} />
        }
        </CardActions>
      </Card>
    );
  }
}