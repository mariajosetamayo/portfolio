import React, {Component} from 'react';
import Repo from './repo'


// const styles = {
//   active: {
//     display: 'inherit'
//   },
//   innactive: {
//     display: 'none'
//   }
// }

class GithubRepos extends Component{
  constructor(props){
    super(props)
    console.log('these are the props in repos', this.props)
    // this.state = {
    //   active: false,
    //   selectedRepo: ''
    // }
    // this.handleClick = this.handleClick.bind(this);
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

  renderGithubRepos (){
    return this.props.repos.map((repo, index) => {
      // if(this.state.clickOnRepo === false){
        return (
          <div>
            <li key={index}>
              <Repo repo={repo}/>
            </li>
          </div>
        )
    })
  }

  render(){
    console.log('these are the props in repos after re-render', this.props)
    return(
      <div>
        {this.renderGithubRepos()}
      </div>
    )
  }
}

export default GithubRepos;
