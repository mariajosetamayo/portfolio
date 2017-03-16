import React, { Component } from 'react';
import NavBar from './nav-bar';
import Home from './home';
import ProjectsSlider from './projects';
import AboutMe from './about-me';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <ProjectsSlider />
        <AboutMe />
        <Contact />
      </div>
    );
  }
}
