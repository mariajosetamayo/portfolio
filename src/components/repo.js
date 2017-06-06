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
  }

  renderGithubRepo (){
    const stateStyle = this.state.active ? styles.active : styles.innactive;

    const chevronStyle = {
      paddingRight : '96px',
      color: '#33caca',
      width: '0px',
      height: '0px',
      marginTop: '-43px',
      display: 'inline-block',
      float: 'right',
      fontSize: '20px'
    }

    return (
      <div>
        <h2 ><a className='repoInfo' href = '#' onClick={this.handleClick}>{this.props.repo.name} </a></h2><i onClick={this.handleClick} style={chevronStyle} className="fa fa-chevron-down" aria-hidden="true"></i>
        <div className="repoDescription">
          <p style={stateStyle} >Description: {this.props.repo.description}</p>
          <p style={stateStyle}><a className="repoUrl" href= {this.props.repo.svn_url} target="_blank">URL : {this.props.repo.name}</a></p>
        </div>
      </div>

    )
  }

  render(){
    return(
      <div>
        {this.renderGithubRepo()}
        <hr />
      </div>

    )
  }
}

export default Repo;
