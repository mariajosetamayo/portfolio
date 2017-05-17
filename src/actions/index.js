import axios  from 'axios';
import {FETCH_GITHUB_INFO} from './types';
import {SEND_MESSAGE} from './types';

export function getGithubRepos(){
  return function (dispatch){
    axios.get('https://api.github.com/users/mariajosetamayo/repos?page=1&per_page=100')
    .then(response => {
      console.log('this is the response', response.data)
      dispatch({
        type: FETCH_GITHUB_INFO,
        payload: response.data
      });
    });
  }
}

export function sendMessageToMaria(message){
  console.log('it is hitting the request', message)
  return function (dispatch){
    axios.post('/sendMessage', {text: message, subject: 'A message from your website', from: 'test@test.com'})
    .then(response =>{
      console.log(response)
      dispatch({
        type: SEND_MESSAGE
      })
    });
  }
}
