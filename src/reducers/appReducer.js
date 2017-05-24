import{
  FETCH_GITHUB_INFO,
  SEND_MESSAGE,
  MESSAGE_ERROR,
  // CLEAN_MESSAGE_ERROR
  } from '../actions/types';

export default function (state =
  {
    githubInfo: '',
    messageSent: false,
    messageError: ''
  }
, action)
{
  switch(action.type){
    case FETCH_GITHUB_INFO:
    return {...state, githubInfo:action.payload}
    case SEND_MESSAGE:
    return {...state, messageSent: true}
    case MESSAGE_ERROR:
    return {...state, messageError: action.payload}
  }
  return state;
};
