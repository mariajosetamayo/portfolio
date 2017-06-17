import React, {Component} from 'react';
import Repo from './repo'

class GithubRepos extends Component{
  constructor(props){
    super(props)
  }

  renderGithubRepos (){
    return this.props.repos.map((repo, index) => {
        if(repo.open_issues === 1 && repo.description){
          return (
            <div className="githubReposListItem" key={index}>
              <li >
                <Repo repo={repo} index={index}/>
              </li>
            </div>
          )
        }
    })
  }

  render(){
    return(
      <div className="accordeon">
        <h1 className="accordionTitle">Other Select Github Repositories</h1>
        {this.renderGithubRepos()}
      </div>
    )
  }
}

export default GithubRepos;
