import React, {Component} from 'react';

class GithubRepos extends Component{
  constructor(props){
    super(props)
    console.log('these are the props in repos', props)
  }

  renderRepos (){
    // return this.props.repos.map((repo, index) => {
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
    return(
      <div>
        {this.renderRepos()}
      </div>
    )
  }
}

export default GithubRepos;
