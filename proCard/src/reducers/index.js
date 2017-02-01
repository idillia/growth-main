import {combineReducers} from 'redux';
import profiles from './profileReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  profiles,
  numAjaxCallsInProgress
});

export default rootReducer;