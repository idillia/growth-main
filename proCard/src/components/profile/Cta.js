import React, {PropTypes} from 'react';
import _ from 'underscore';
import CtaDownloadWidget from './CtaDownloadWidget';



const Cta = () => {
  return (
    <div className="row cta-margin cta">
      <div className="col-lg-5  col-md-5 cta-text">
      This profile was created about you based on your Twitter feed and quiz answers about you by your network. Is this correct? Download Good&Co app to find out.</div>
      <div className="col-lg-7  col-md-7"><CtaDownloadWidget/></div>
    </div>
  )

};


  export default Cta;  