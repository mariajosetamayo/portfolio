import React, {Component} from 'react';

const styles = {
  active: {
    display: 'inherit'
  },
  innactive: {
    display: 'none'
  }
}

class Repo extends Component{
  constructor(props){
    super(props)
    console.log('these are the props in repos', this.props)
    this.state = {
      active: false,
      selectedRepo: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event){
    event.preventDefault()
    this.setState({
      active: !this.state.active,
      selectedRepo: event.target.value
    })
    console.log(this.state)
  }

  renderGithubRepo (){
    const stateStyle = this.state.active ? styles.active : styles.innactive;

        return (
          <div>
            <a href = '#' onClick={this.handleClick}>{this.props.repo.name} </a>
            <p style={stateStyle}>URL : {this.props.repo.git_url}</p>
          </div>
        )
  }

  render(){
    console.log('these are the props in repos after re-render', this.props)
    return(
      <div>
        {this.renderGithubRepo()}
      </div>
    )
  }
}

export default Repo;
