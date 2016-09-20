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
      longDesc: false
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
      marginRight: "auto",
      minHeight: "350px"
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
    
    var cardTextStyle = {
      padding: "10px"
    }
    
    var shortDescription = "";
    
    var shortDescTh = 95;
    
    // This piece of code creates a short description with a trailing ellipsis
    // if the length of the description is more than 95 characters.
    // 95 is chosen because that is around the end of the third line
    // in our workitem card, so there is a good chance we will need
    // a fourth line in our description, justifying "show more" even
    // if it's only a couple more words.
    if (this.props.work.description.length > shortDescTh) {
      
      // length of description more than 95 characters
      var desc = this.props.work.description;
      
      // get the threshold index in the string
      var ind = shortDescTh;
      
      // move to the end of current word at threshold index.
      for (var i = ind; desc[i] !== " " && desc[i]; ++i) {++ind;}
        
      if (desc[ind] === " ") {
        // we reached the end of a word and there is at least
        // one more word in the description.
        shortDescription = desc.slice(0, ind);
        shortDescription = shortDescription + "...";
        console.log("shortDescription: ", shortDescription);
        this.state.longDesc = true;
      } else {
        // if we do not have a space at the end of the last word
        // in our short description, then that means we have
        // reached the end of the description. No need for
        // a show more button. The state is updated to reflect that
        // for later use.
        this.state.longDesc = false;
      } 
    }
    return(
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={cardStyle}>
        <CardMedia>
          <ImageSlideshow images={this.props.work.images} />
        </CardMedia>
      
        // this floating action button will 
        // take the user to the displayed website.
        <FloatingActionButton style={fabStyle}
                              zDepth={3}
                              mini={true}
                              backgroundColor="#009688"
                              onTouchTap={this.navigateTo.bind(this)}>
          <NavigationArrowForward />
        </FloatingActionButton>
        <CardTitle title={this.props.work.title} />
          {this.state.longDesc === true ?
            // we have a long description so make use
            // of short description and full description
            
            this.state.expanded ? 
              // if we are in the card's expanded state
              // then display the full description
              <CardText expandable={true} style={cardTextStyle}>
              {this.props.work.description}
              </CardText>

            : 
              // if we are NOT in the expanded state, then
              // display the short description
              <CardText style={cardTextStyle}>{shortDescription}</CardText>

          : 
            // if the description is shorter than our threshold, display as is.
            <CardText style={cardTextStyle}>{this.props.work.description}</CardText>

          }
        <CardActions>
          // Seems state starts as true even though the
          // constructor sets expanded to false. Utilizing
          // negation offer fixes for now. Need to figure out
          // why this.state.expanded is not properly set by
          // constructor.
          
          {this.state.longDesc === true ? 
            // if we have a description longer than threshold limit
            !this.state.expanded ? 
              // if the card is not expanded, show the "SHOW MORE" button which
              // expands the card when clicked.
              <FlatButton label="Show more" onTouchTap={this.handleExpand.bind(this)}
              style={showStyle} /> 
            :
              // if the card is expanded, show the "SHOW LESS" button which
              // shrinks the card when clicked.
              <FlatButton onTouchTap={this.handleReduce.bind(this)} label="Show less"
              style={showStyle} />

          :
            // if the description is shorter than our threshold, no buttons.
            <div></div>
          }
        </CardActions>
      </Card>
    );
  }
}