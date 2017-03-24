import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Project from './project';
import CarouselArrows from './carouselArrows'

class ProjectsSlider extends Component {
  mixins: [Carousel.ControllerMixin]
  render() {
    const sliderStyles = {
      marginTop: '45%',
      textAlign:'center',
    }
    const titleStyle = {
      fontSize: '40px',
      color: '#282828',
      marginBottom: '1%'
    }
    return (
      <div style={sliderStyles}>
        <hr />
        <h1 style={titleStyle}>Projects</h1>
        <Carousel ref="carousel" cellAlign="center" decorators={CarouselArrows}>
         <Project project='project1'/>
         <Project project='project2'/>
         <Project project='project3'/>
        </Carousel>
      </div>
    );
  }
}

export default ProjectsSlider;
