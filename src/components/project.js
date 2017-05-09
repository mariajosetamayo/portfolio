import React, {Component} from 'react';
// import Carousel from 'nuka-carousel';

class Project extends Component {
  constructor(props){
    super(props)
  }

  renderProject(){
    const sectionStyles={
      maxWidth: '95%',
      height: 'auto',
    }

    const titleStyles = {
      fontSize: '35px',
      color: '#707070'
    }

    const githubLogoStyles = {
      fontSize: '3.3em',
      color: '#282828'
    }

    const websiteLinkStyles = {
      fontSize: '2.5em',
      color: '#282828',
      paddingLeft: '5%'
    }

    const descriptionStyles = {
      fontSize: '20px',
      padding: '3%'
    }

    const projectsStyle = {
      paddingTop: '5%'
    }

    if(this.props.project === 'project1'){
      return(
        <div style={projectsStyle}>
          <h2 className = "projectName" style={titleStyles}>Outdoor Sagas</h2>
          <p className="projectDescription" style={descriptionStyles}>Outdoor Sagas is a full-stack application that allows users to record, share, and save memories of their outdoor adventures in one place.</p>
          <p><a href="https://github.com/mariajosetamayo/outdoor-sagas-app"><i className="fa fa-github fa-lg github" aria-hidden="true" style={githubLogoStyles}></i></a><a href="https://outdoor-sagas.herokuapp.com/" target="_blank"><i className="fa fa-link laptop" aria-hidden="true" style={websiteLinkStyles}></i></a></p>
          <a href="https://outdoor-sagas.herokuapp.com/" target="_blank"><img src={'../photos/outdoorSagasNew.jpg'} style={sectionStyles}/></a>
        </div>
      )
    }
    else if(this.props.project === 'project2'){
      return(
        <div style={projectsStyle}>
          <h2 className = "projectName" style={titleStyles}>FoodTrack</h2>
          <p className="projectDescription" style={descriptionStyles}>FoodTrack is a full-stack application to keep track of what you eat, get recommendations, and a daily report summarizing the nutrients you consumed.</p>
          <p><a href="https://github.com/mariajosetamayo/foodTrack"><i className="fa fa-github fa-lg github" aria-hidden="true" style={githubLogoStyles}></i></a><a href="https://food-track.herokuapp.com/" target="_blank"><i className="fa fa-link laptop" aria-hidden="true" style={websiteLinkStyles}></i></a></p>
          <a href="https://food-track.herokuapp.com/" target="_blank"><img src={'../photos/foodTrackScreenShot2.jpg'} style={sectionStyles}/></a>
        </div>
      )
    }
    else if(this.props.project === 'project3'){
      return(
        <div style={projectsStyle}>
          <h2 className = "projectName" style={titleStyles}>Muncheck</h2>
          <p className="projectDescription" style={descriptionStyles}>Muncheck is an application to check the  nutritional facts about almost any food item and whether it is recommended given a particular dietary requirement (diabetes, kidney disease and weight loss).</p>
          <p><a href="https://github.com/mariajosetamayo/muncheck"><i className="fa fa-github fa-lg github" aria-hidden="true" style={githubLogoStyles}></i></a><a href="https://mariajosetamayo.github.io/muncheck/" target="_blank"><i className="fa fa-link laptop" aria-hidden="true" style={websiteLinkStyles}></i></a></p>
          <a href="https://mariajosetamayo.github.io/muncheck/" target="_blank"><img src={'../photos/muncheckNew.png'} style={sectionStyles}/></a>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderProject()}
      </div>
    );
  }
}

export default Project;
