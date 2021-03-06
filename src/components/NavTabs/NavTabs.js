import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Router, Route, Link} from 'react-router';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import WorkItem from '../WorkItem/WorkItem';
import {Grid, Row, Col} from "react-flexbox-grid/lib";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    color: "white"
  },
  slide: {
    padding: 10,
    color: "white"
  },
};  

export default class NavTabs extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("NavTabs this constructor: ", this);
    this.state = {
      slideIndex: this.props.tabIndexState
    }
  }
  
  onBackButtonEvent(e) {
    e.preventDefault();
    console.log("back$$$$$$$$$$$$$$$$$$$$$");
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
    console.log(this);    
    
    
    switch (value) {
      case 0:
        this.context.router.push('/');
        break;
      case 1:
        this.context.router.push('projects');
        break;
    }
  }

  render() {
    this.state.slideIndex = this.props.tabIndexState;
    var tabsGeneralStyle = {
      boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"
    }
    var tabsStyle = {
      backgroundColor: "#212121"
    }
    var tabInkStyle = {
      backgroundColor: "#424242"
    }
    
    var gridItemStyle = {
      alignItems: "center",
      marginBottom: "30px"
    }
    
    var gridStyle = {
      maxWidth: 1400,
      marginTop: 10,
      padding: 0
    }
    
    var gridWorks = this.props.works.map(work => {
      <Col style={gridItemStyle}  xs={12} sm={6} md={5} lg={3}>
        <WorkItem work={work} />
      </Col>      
    });
    console.log(gridWorks);
    return (
      <div>
        <Tabs
          onChange={this.handleChange.bind(this)}
          value={this.state.slideIndex}
          tabItemContainerStyle={tabsStyle}
          inkBarStyle={tabInkStyle}
          style={tabsGeneralStyle}
        >
          <Tab label="About" value={0}> 
            <Link to="about" activeClassName="active" />
          </Tab>

          <Tab label="Projects" value={1}>
            <Link to="projects" activeClassName="active" />
          </Tab>          

        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange.bind(this)}
        >
          <div style={styles.slide}>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            <Grid fluid style={gridStyle}>
              <Row >
                <Col style={gridItemStyle}  xs={12} sm={6} md={6} lg={4}>
                  <WorkItem work={this.props.works[0]} />
                </Col> 
                {  /*
                <Col style={gridItemStyle}  xs={12} sm={6} md={6} lg={4}>
                  <WorkItem work={this.props.works[1]} />
                </Col>  
                <Col style={gridItemStyle}  xs={12} sm={6} md={6} lg={4}>
                  <WorkItem work={this.props.works[2]} />
                </Col>
                <Col style={gridItemStyle}  xs={12} sm={6} md={6} lg={4}>
                  <WorkItem work={this.props.works[3]} />
                </Col>   */ }                 
              </Row>
            </Grid>
          </div>
        </SwipeableViews>
      </div>
    );
  }    
}

NavTabs.contextTypes = {
    router: React.PropTypes.object
}

