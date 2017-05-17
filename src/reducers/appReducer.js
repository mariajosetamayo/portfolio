import{FETCH_GITHUB_INFO} from '../actions/types';
import{SEND_MESSAGE} from '../actions/types';


export default function (state =
  {
    githubInfo: {},
    messageSent: false
  }
, action)
{
  switch(action.type){
    case FETCH_GITHUB_INFO:
    return {...state, githubInfo:action.payload}
    case SEND_MESSAGE:
    return {...state, messageSent: true}
  }
  return state;
};
