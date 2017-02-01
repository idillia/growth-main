import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profileReducer(state = initialState.profiles, action) {
  switch(action.type) {
    case types.LOAD_PROFILES_SUCCESS: 
      return action.profiles;     
    default:
      return state;
  }
}