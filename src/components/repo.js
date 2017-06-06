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

    const repoTitleStyle = {
      paddingTop: '10px',
      paddingBottom: '10px',
      color: '#757581'
    }

    const descriptionStyles = {
      padding: '5px 8%',
      textShadow: '.2px .2px grey',
      color: '#757581'
    }

    const urlStyles = {
      color: '#757581'
    }

    return (
      <div>
        <h2 ><a className='repoInfo' href = '#' onClick={this.handleClick} style={repoTitleStyle}>{this.props.repo.name} </a></h2><i onClick={this.handleClick} style={chevronStyle} className="fa fa-chevron-down" aria-hidden="true"></i>
        <div style={descriptionStyles} >
          <p style={stateStyle} >Description: {this.props.repo.description}</p>
          <p style={stateStyle}><a style={urlStyles} href= {this.props.repo.svn_url} target="_blank">URL : {this.props.repo.svn_url}</a></p>
        </div>
      </div>

    )
  }

  render(){
    console.log('these are the props in repos after re-render', this.props)
    return(
      <div>
        {this.renderGithubRepo()}
        <hr />
      </div>

    )
  }
}

export default Repo;
