import React, {Component} from 'react';
import Repo from './repo'

class GithubRepos extends Component{
  constructor(props){
    super(props)
    console.log('these are the props in repos', this.props)
  }


  renderGithubRepos (){
    const listItemStyles = {
      listStyleType: 'none',
      color: '#282828'
    }
    return this.props.repos.map((repo, index) => {
        if(repo.open_issues === 1 && repo.description){
          return (
            <div style={listItemStyles}>
              <li key={index}>
                <Repo repo={repo}/>
              </li>
            </div>
          )
        }
    })
  }

  render(){

    const accordeonBoxStyles = {
      margin: '0 auto',
      width : '500px',
      borderRadius : '2px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.22)'
    }

    const accordionTitleStyles = {
      padding : '20px',
      color : '#ffffff',
      backgroundColor: '#4d4d4d',
      fontSize: '27px'
    }
    return(
      <div style={accordeonBoxStyles} className='accordeon'>
        <h1 style={accordionTitleStyles}>Selected Github Repositories</h1>
        {this.renderGithubRepos()}
      </div>
    )
  }
}

export default GithubRepos;
