import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DownloadWidget from './../profile/DownloadWidget';


export class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    /* All Country data is lowercase ISO2 standard http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
    /* Default Country, if set to "auto" will determine the visiting user's country via their location */
    var linkTextingDefaultCountry = "auto";
    /* If using automatic country detection with https or over 1,000 visits/day go to http://ipinfo.io, get a token, and place it here */
    var linkTextingIpinfoToken = "";
    /* Preferred Countries in Dropdown */
    var linkTextingPreferredCountries = ["us", "gb"];
    /* Countries available in dropdown */

    const divStyle = {
      'display': 'none'
    };
    const divImgStyle = {
      'backgroundImage': 'url(http://good.co/corporate/wp-content/themes/goodco/dist/images/landing-bg.png)'
    }

    return (
      <div className = "home-wrapper">
        <section className="page-landing" style={divImgStyle}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="content">
                  <h1 className="all-caps tagline">Find Your Strengths.</h1>
                  <h1 className="all-caps tagline bottom">Unlock Your Potential.</h1>
                  <DownloadWidget/>
                </div>  
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="home-animation">
                  <div className="phone">
                      <div className="img-container">
                          <div className="positioning">
                              <img src="http://good.co/corporate/wp-content/themes/goodco/dist/images/Animation1_Final_preloader.jpg" alt="loading"/>
                          </div>
                          <img src="http://good.co/corporate/wp-content/themes/goodco/dist/images/phone-skin-small.png" />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>                     
    )
  }
}





export default HomePage;

// <h3 className="check-fit odometer-companies"><span className="odometer">2626</span> <span>Companies</span></h3>
// <h3 className="check-fit odometer-users"><span className="odometer">1413925</span> <span>Users</span></h3>