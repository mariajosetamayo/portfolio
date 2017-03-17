import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, hashLocation, historyLocation, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import ProjectsSlider from './components/projects';
import AboutMe from './components/about-me';
import Contact from './components/contact';


ReactDOM.render(<App />, document.querySelector('.app'));
