import axios  from 'axios';
import {FETCH_CODEWARS_INFO} from './types';


// export function getCodeWarsInfo(){
//   return function (dispatch){
//     axios.get('https://www.codewars.com/api/v1/users/mariajosetamayo', {headers: "Access-Control-Allow-Origin", "*" })
//   })
//     .then(response => {
//       dispatch({
//         type: FETCH_CODEWARS_INFO,
//         payload: response.data
//       });
//     });
//   }
// }

export function getCodeWarsInfo(){
  return function (dispatch){
    axios.get('https://www.codewars.com/api/v1/users/mariajosetamayo', {
      headers: { "Access-Control-Allow-Origin": "*", "content-type" : 'application/x-www-form-urlencoded', "dataType":"JSONP"}
    })
    .then(response => {
      dispatch({
        type: FETCH_CODEWARS_INFO,
        payload: response.data
      });
    });
  }
}
