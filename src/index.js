import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, hashLocation, historyLocation, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/app';
import Home from './components/home';
import ProjectsSlider from './components/projects';
import AboutMe from './components/about-me';
import Contact from './components/contact';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('.app'));
