import{
  FETCH_GITHUB_INFO,
  SEND_MESSAGE,
  MESSAGE_ERROR,
  } from '../actions/types';

export default function (state =
  {
    githubInfo: [],
    messageSent: false,
    messageError: ''
  }
, action)
{
  switch(action.type){
    case FETCH_GITHUB_INFO:
    console.log('this is the info that reducer is getting', action.payload)
    console.log('this is the modified state', {...state, githubInfo: action.payload})

    return {...state, githubInfo: action.payload}
    case SEND_MESSAGE:
    return {...state, messageSent: true}
    case MESSAGE_ERROR:
    return {...state, messageError: action.payload}
  }
  console.log('this is the state updated', state)
  return state;
};
