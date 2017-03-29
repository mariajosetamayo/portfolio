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
      fontSize: '30px',
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
      fontSize: '18px',
      padding: '1%'
    }

    if(this.props.project === 'project1'){
      return(
        <div>
          <h2 className = "projectName" style={titleStyles}>Outdoor Sagas</h2>
          <p className="projectDescription" style={descriptionStyles}>Outdoor Sagas is a full-stack app that allows users to record, share, and save adventure memories in one place.</p>
          <p><a href="https://github.com/mariajosetamayo/outdoor-sagas-app"><i className="fa fa-github fa-lg github" aria-hidden="true" style={githubLogoStyles}></i></a><a href="https://outdoor-sagas.herokuapp.com/"><i className="fa fa-laptop laptop" aria-hidden="true" style={websiteLinkStyles}></i></a></p>
          <img src={'../photos/outdoorSagas.jpg'} style={sectionStyles}/>
        </div>
      )
    }
    else if(this.props.project === 'project2'){
      return(
        <div>
          <h2 className = "projectName" style={titleStyles}>FoodTrack</h2>
          <p className="projectDescription" style={descriptionStyles}>FoodTrack is a full-stack application to keep track of what you eat, get recommendations, and a daily report summarizing the nutrients you consumed.</p>
          <p><a href="https://github.com/mariajosetamayo/foodTrack"><i className="fa fa-github fa-lg github" aria-hidden="true" style={githubLogoStyles}></i></a><a href="https://intense-badlands-10213.herokuapp.com/"><i className="fa fa-laptop laptop" aria-hidden="true" style={websiteLinkStyles}></i></a></p>
          <img src={'../photos/foodTrackScreenShot2.jpg'} style={sectionStyles}/>
        </div>
      )
    }
    else if(this.props.project === 'project3'){
      return(
        <div>
          <h2 className = "projectName" style={titleStyles}>Muncheck</h2>
          <p className="projectDescription" style={descriptionStyles}>Muncheck is an app to check the  nutritional facts about most any food item and whether it is recommended given a particular dietary requirement (diabetes, kidney disease and weight loss).</p>
          <p><a href="https://github.com/mariajosetamayo/muncheck"><i className="fa fa-github fa-lg github" aria-hidden="true" style={githubLogoStyles}></i></a><a href="https://mariajosetamayo.github.io/muncheck/"><i className="fa fa-laptop laptop" aria-hidden="true" style={websiteLinkStyles}></i></a></p>
          <img src={'../photos/muncheckNew.jpg'} style={sectionStyles}/>
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
