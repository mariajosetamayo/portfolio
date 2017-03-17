import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, hashLocation, historyLocation, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import ProjectsSlider from './components/projects';
import AboutMe from './components/about-me';
import Contact from './components/contact';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path = 'projects' component={ProjectsSlider} />
            <Route path = 'about-me' component={AboutMe} />
            <Route path='contact' component={Contact} />
        </Route>
    </Router>
);

// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(routes, document.getElementById('app'))
// );

ReactDOM.render(routes, document.querySelector('.app'));
