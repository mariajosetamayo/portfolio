import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Project from './project';
import CarouselArrows from './carouselArrows'

class ProjectsSlider extends Component {
  // mixins: [Carousel.ControllerMixin]
  render() {
    const sliderStyles = {
      marginTop: '45%',
      textAlign:'center',
    }
    const titleStyle = {
      fontSize: '40px',
      color: '#282828',
      marginBottom: '-2%'
    }

    return (
      <div style={sliderStyles}>
        <hr />
        <h1 style={titleStyle}>Projects</h1>
        <Project project='project1' />
        <Project project='project2' />
        <Project project='project3' />
      </div>
    );
  }
}

export default ProjectsSlider;
