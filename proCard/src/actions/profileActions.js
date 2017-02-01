import * as types from './actionTypes';
import profileApi from '../api/mockProfileApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

import * as firebase from  'firebase';
import config from './../../firebaseConfig';


firebase.initializeApp(config);

let rootRef = firebase.database().ref();

var re = '([^/]*)$';
var re1 = '([^/]*)/$';

var url = window.location.href;
var url_screen_name;

if(url.match(re)) {
  url_screen_name = url.match(re)[1]
} else if(url.match(re1)){
  url_screen_name = url.match(re1)[1]

}

//Function below is action creater func and types.LOAD_PROFILES_SUCCESS is an action
export function loadProfilesSuccess(profiles) {
  return {type: types.LOAD_PROFILES_SUCCESS, profiles};
}

// export function loadProfiles() {
//   return dispatch => {
//     dispatch(beginAjaxCall());
//     rootRef.once("value").then(function(snapshot) {

//       let profiles = snapshot.child("users").val();
//       dispatch(loadProfilesSuccess(profiles));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

//Query Firebase before getting the whole object

export function loadProfiles() {
  return dispatch => {
    dispatch(beginAjaxCall());
    rootRef.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        for (var prop in childData){ 
          for (var i=0; i < childData[prop].length; i++) {
            if(childData[prop][i].screen_name == url_screen_name) {
              dispatch(loadProfilesSuccess(childData[prop][i]));
            }
          }  
        }  
      })
    }).catch(error => {
      throw(error);
    });
  };
}



// UNCOMMENT FUNCTION BELOW TO USE MOCKUP DATA

// export function loadProfiles() {
//   return dispatch => {
//     dispatch(beginAjaxCall());
//     return profileApi.getAllProfiles().then(profiles => {
//       console.log("mockProf", profiles);

//       // console.log("mockProf", JSON.parse(profiles));
//       dispatch(loadProfilesSuccess(profiles));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }


