import { combineReducers } from 'redux';
import appReducer from './appReducer'
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
  form: form,
  app: appReducer
});

export default rootReducer;
