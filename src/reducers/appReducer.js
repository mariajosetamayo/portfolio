import{FETCH_CODEWARS_INFO} from '../actions/types';

export default function (state =
  {
    codewarsInfo: {}
  }
, action)
{
  switch(action.type){
    case FETCH_CODEWARS_INFO:
    return {...state, codewarsInfo:action.payload}
  }
  return state;
};
