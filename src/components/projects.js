import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Project from './project';
import GithubRepos from './githubRepos'

// const styles = {
//   active: {
//     display: 'inherit'
//   },
//   innactive: {
//     display: 'none'
//   }
// }

class ProjectsSlider extends Component {
  constructor(props){
    super(props)
    console.log('these are the props in projects', props)
    // this.state = {
    //   active: false,
    //   selectedRepo: ''
    // }
    // this.handleClick = this.handleClick.bind(this);
    // this.renderGithhubRepoDetails = this.renderGithhubRepoDetails.bind(this);
  }

  // handleClick (event){
  //   event.preventDefault()
  //   this.setState({
  //     active: !this.state.active,
  //     selectedRepo: event.target.value
  //   })
  //   console.log(this.state)
  // }

  // renderGithhubRepoDetails (repo){
  //   const stateStyle = this.state.active ? styles.active : styles.innactive;
  //
  //   return(
  //     <p style={stateStyle}>URL : {repo.git_url}</p>
  //   )
  // }
  //
  // renderGithubRepos (){
  //   return this.props.githubInfo.map((repo, index) => {
  //     // if(this.state.clickOnRepo === false){
  //       return (
  //         <div>
  //           <li key={index}>
  //             <a href = '#' onClick={this.handleClick} value={repo}>{repo.name} </a>
  //             {this.renderGithhubRepoDetails(repo)}
  //           </li>
  //         </div>
  //       )
  //     // }
  //   //   else{
  //   //     return (
  //   //       <div>
  //   //         <li key={index} onClick={this.handleClick}>
  //   //           <a href = '#'>{repo.name}</a>
  //   //           <p>{repo.git_url}</p>
  //   //         </li>
  //   //       </div>
  //   //     )
  //   //   }
  //   })
  // }

  // renderGithhubRepoDetails (){
  //   return (
  //     <div>
  //       <li>
  //     </div>
  //   )
  // }
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
        <GithubRepos repos = {this.props.githubInfo} />
      </div>
    );
  }
}

export default ProjectsSlider;
