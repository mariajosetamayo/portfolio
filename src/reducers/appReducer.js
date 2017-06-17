import{
  FETCH_GITHUB_INFO,
  SEND_MESSAGE,
  MESSAGE_ERROR,
  RECAPTCHA_VERIFICATION
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
    return {...state, githubInfo: action.payload}
    case RECAPTCHA_VERIFICATION:
    return {...state, recaptchaVerified: action.payload}
    case SEND_MESSAGE:
    return {...state, messageSent: true}
    case MESSAGE_ERROR:
    return {...state, messageError: action.payload}
  }
  return state;
};
