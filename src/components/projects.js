import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Project from './project';
import GithubRepos from './githubRepos'


class ProjectsSlider extends Component {
  constructor(props){
    super(props)
    console.log('these are the props in projects', props)
  }

  // handleClick (repo){
  //   return(
  //     <div>
  //       {this.props.messageStatus ? <div style={messageSentStyle}>Your message has been sent</div> : <EmailForm />}
  //     </div>
  //   )
  // }

  renderGithubRepos (){
    return this.props.githubInfo.map((repo, index) => {
      return (
        <div>
          <li key={index}>
            <a>{repo.name}</a>
          </li>
        </div>
      )
    })
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
    console.log('these are the props in projects', this.props.githubInfo)


    return (
      <div style={sliderStyles}>
        <hr />
        <h1 style={titleStyle}>Projects</h1>
        <Project project='project1' />
        <Project project='project2' />
        <Project project='project3' />
        {this.renderGithubRepos()}
      </div>
    );
  }
}

export default ProjectsSlider;
