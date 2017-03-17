import React, {Component} from 'react';
// import Carousel from 'nuka-carousel';

class Project extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  renderProject(){
    const sectionStyles={
      maxWidth: '80%',
      height: 'auto',
    }

    const titleStyles = {
      fontSize: '35px'
    }

    if(this.props.project === 'project1'){
      return(
        <div>
          <h2 style={titleStyles}>Outdoor Sagas</h2>
          <img src={'../photos/outdoorSagas.jpg'} style={sectionStyles}/>
        </div>
      )
    }
    else if(this.props.project === 'project2'){
      return(
        <div>
          <h2 style={titleStyles}>FoodTrack</h2>
          <img src={'../photos/foodTrackScreenShot2.jpg'} style={sectionStyles}/>
        </div>
      )
    }
    else if(this.props.project === 'project3'){
      return(
        <div>
          <h2 style={titleStyles}>Muncheck</h2>
          <img src={'../photos/muncheck.jpg'} style={sectionStyles}/>
        </div>
      )
    }
  }

  render() {


    return (
      <div >
        {this.renderProject()}
      </div>
    );
  }
}

export default Project;
