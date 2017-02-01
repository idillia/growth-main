 import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import _ from 'underscore';



const ProfileListRow = ({profile}) => {
  // console.log("profile", profile);
  let strImages = profile.pa[0];
 

  let pickGender = function(arr) {
    let genderArray = [];
    for(let i =0; i<3; i++) {
      genderArray.push(_.sample(arr, 1)[0]);
    }
    return genderArray;
  };

  let theGender = pickGender(["_m",   "_f"]);

  const invertedArchTypes = {
    Advocate:"the_advocate_n",
    Caretaker:"the_caretaker_n",
    Dreamer:"the_dreamer_n",
    "Go getter":"the_go_getter_n",
    Humanitarian:"the_humanitarian_n",
    Idealist:"the_idealist_n",
    Inventor:"the_inventor_n",
    Mastermind:"the_mastermind_n",
    Maverick:"the_maverick_n",
    Protector:"the_protector_n",
    Rock:"the_rock_n",
    Socialite:"the_socialite_n",
    "Straight shooter":"the_straight_shooter_n",
    Strategist:"the_strategist_n",
    Technician:"the_technician_n",
    Visionary:"the_visionary_n"
  };

  let archTypeKeyArr = function(a,b) {
    let archTypeKey = [];
    for (let i=0; i<a.length; i++) {
      for (let key in b) {
        if(key === a[i]) {
          archTypeKey.push(b[key].slice(0,-2));
        }  
      }
    }  
    
        return archTypeKey;  
  }(strImages, invertedArchTypes);

  let one = archTypeKeyArr[0];
  let two = archTypeKeyArr[1];
  let three = archTypeKeyArr[2];

    const archImageStyle = {
      one: {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + one + theGender[0] + ".png") +')','height': '80px' },
      two: {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + two + theGender[1] + ".png") +')','height': '80px'},
      three: {'backgroundImage':'url(' + require("./../../images/new_personas/186/" + three + theGender[2] +  ".png") +')', 'height': '80px'}
    };

  const archNameStyle = {
    'the_advocate': {'backgroundColor': '#bb51e2'},
    'the_go_getter': {'backgroundColor': '#81c850'},
    'the_maverick': {'backgroundColor': '#14dfce'},
    'the_dreamer': {'backgroundColor': '#14dfce'},
    'the_caretaker':{'backgroundColor': '#14dfce'},
    'the_straight_shoooter': {'backgroundColor': '#14dfce'},
    'the_socialite': {'backgroundColor': '#14dfce'},
    'the_humanitarian': {'backgroundColor': '#14dfce'},
    'the_idealist': {'backgroundColor': '#14dfce'},
    'the_inventor': {'backgroundColor': '#14dfce'},
    'the_mastermind': {'backgroundColor': '#14dfce'},
    'the_protector': {'backgroundColor': '#14dfce'},
    'the_rock': {'backgroundColor': '#14dfce'},
    'the_strategist': {'backgroundColor': '#14dfce'},
    'the_technician': {'backgroundColor': '#14dfce'},
    'the_visionary': {'backgroundColor': '#14dfce'}
  };

  return (
    <div className="tile">
      <h2>Your Personas & Strengths</h2>
      <div className="line"></div>
      <div className="archetype-container">
        <div className="row three-arch">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 archCol">
            <div style={archImageStyle.one} className="archetype-image"></div>
            <div className="archetype-name" style={archNameStyle["the_advocate"]}>{strImages[0]}</div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 archCol">
            <div className="archetype-image" style={archImageStyle.two}></div>
            <div className="archetype-name" style={archNameStyle["the_go_getter"]}>{strImages[1]}</div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4  archCol">
            <div className="archetype-image" style={archImageStyle.three}>
            </div>
            <div className="archetype-name" style={archNameStyle["the_maverick"]}>{strImages[2]}</div>
          </div>
        </div>
        <span className="strength">{profile.sw[0][0]}</span>
        <span className="strength">{profile.sw[0][1]}</span>
        <span className="strength">{profile.sw[0][2]}</span>
        <span className="strength">{profile.sw[0][3]}</span>
        <span className="strength">{profile.sw[0][4]}</span>
        <span className="strength">{profile.sw[0][5]}</span>
      </div>
    </div>
  );
};


ProfileListRow.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileListRow;

 