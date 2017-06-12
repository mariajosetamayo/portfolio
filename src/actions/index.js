import axios  from 'axios';
import {
  FETCH_GITHUB_INFO,
  SEND_MESSAGE,
  MESSAGE_ERROR,
} from './types';

export function getGithubRepos(){
  return function (dispatch){
    axios.get('https://api.github.com/users/mariajosetamayo/repos?page=1&per_page=100')
    .then(response => {
      dispatch({
        type: FETCH_GITHUB_INFO,
        payload: response.data
      });
    });
  }
}

export function sendMessageToMaria(message){
  return function (dispatch){
    axios.post('/sendMessage', {text: message.message, subject: 'A message from your website', from: message.email})
    .then(response =>{
      if(response.data === 'request failed'){
        dispatch(messageError('message could not be sent. Please enter a name, a valid email, and a message.'))
      }
      else{
        dispatch({
          type: SEND_MESSAGE
        })
      }
    })
    .catch((response) => {
      dispatch(messageError('message could not be sent'))
    })
  }
}

export function messageError (error){
  return {
    type: MESSAGE_ERROR,
    payload: error
  };
}
