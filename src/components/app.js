import React, { Component } from 'react';
import NavBar from './nav-bar';
import Home from './home';
import Projects from './projects';
import Skills from './skills.js';
import {connect} from 'react-redux';
import * as actions from '../actions';



import AboutMe from './about-me';
import Contact from './contact';

class App extends Component {
  constructor(props){
    super(props)
    console.log('these are the props in main page', this.props)
    this.state = {
      githubRepos : []
    }
  }
  componentDidMount(){
      this.props.dispatch(
        actions.getGithubRepos()
      )
      this.setState ({
        githubRepos : this.props.githubInfo
      })
  }

  render() {
    console.log('this is the state', this.props.githubInfo)
    return (
      <div>
        <NavBar />
        <div id="homeSection"><Home /></div>
        <div id="projectsSection"><Projects githubInfo={this.props.githubInfo} /></div>
        <div id="skillsSection"><Skills /></div>
        <div id="aboutMeSection"><AboutMe /></div>
        <div id="contactSection" ><Contact messageStatus = {this.props.messageStatus} messageError = {this.props.messageError} /></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  githubInfo: state.app.githubInfo,
  messageStatus: state.app.messageSent,
  messageError: state.app.messageError
})

export default connect (mapStateToProps)(App)
