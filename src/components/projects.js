import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Project from './project';
import GithubRepos from './githubRepos'


class ProjectsSlider extends Component {
  constructor(props){
    super(props)
    console.log('these are the props in projects', props)
  }
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
        <GithubRepos repos={this.props.githubInfo}/>
      </div>
    );
  }
}

export default ProjectsSlider;
