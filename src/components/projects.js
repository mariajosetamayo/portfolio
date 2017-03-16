import React, {Component} from 'react';
import Carousel from 'nuka-carousel';

class ProjectsSlider extends Component {
  mixins: [Carousel.ControllerMixin]
  render() {
    const sliderStyles = {
      marginTop: '58%'
    }
    return (
      <div style={sliderStyles}>
        <Carousel>
          <img src="http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
      </div>
    );
  }
}

export default ProjectsSlider;
