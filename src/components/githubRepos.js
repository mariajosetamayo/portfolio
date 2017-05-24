import React, {Component} from 'react';

class GithubRepos extends Component{
  constructor(props){
    super(props)
    console.log('these are the props in repos', props.repos)
  }

  renderRepos (){
    // return props.repos.map((repo, index) => {
    //   return (
    //     <div>
    //       <li key={index}>
    //         repo.title
    //       </li>
    //     </div>
    //   )
    // })
  }

  render(){
    console.log('these are the props in repos after re-render', this.props.repos)
    return(
      <div>
        {this.renderRepos()}
      </div>
    )
  }
}

export default GithubRepos;
