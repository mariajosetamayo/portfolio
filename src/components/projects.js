import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Project from './project';
import GithubRepos from './githubRepos'


class Projects extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="projectSectionDiv">
        <hr />
        <h1 className="projectsSectionTitle">Projects</h1>
        <Project />
        <GithubRepos repos = {this.props.githubInfo} />
      </div>
    );
  }
}

export default Projects;
