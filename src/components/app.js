import React, { Component } from 'react';
import NavBar from './nav-bar';
import Home from './home';
import ProjectsSlider from './projects';
import {connect} from 'react-redux';
import * as actions from '../actions';



import AboutMe from './about-me';
import Contact from './contact';

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  // componentDidMount(){
  //     this.props.dispatch(
  //       actions.getCodeWarsInfo()
  //     )
  // }
  render() {
    return (
      <div>
        <NavBar />
        <div id="homeSection"><Home /></div>
        <div id="projectsSection"><ProjectsSlider /></div>
        <div id="aboutMeSection"><AboutMe /></div>
        <div id="contactSection"><Contact /></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  codewarsInfo: state.app.codewarsInfo
})

export default connect (mapStateToProps)(App)
