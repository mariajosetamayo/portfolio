import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Project from './project';

class ProjectsSlider extends Component {
  mixins: [Carousel.ControllerMixin]
  render() {
    const sliderStyles = {
      marginTop: '45%',
      textAlign:'center',
    }
    return (
      <div style={sliderStyles}>
        <Carousel ref="carousel">
         <Project project='project1'/>
         <Project project='project2'/>
         <Project project='project3'/>
        </Carousel>
      </div>
    );
  }
}

export default ProjectsSlider;
