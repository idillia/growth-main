import React, {PropTypes} from 'react';
import _ from 'underscore';
import DownloadWidget from './DownloadWidget';



const Tagline = ({profile}) => {
  return (
    <div>
      <div className="tile tagline-title">
        <h2>Tagline</h2>
        <div className="line"></div>
      <div className="tagline-body">{profile["pabs"]}</div>
      </div>
      <DownloadWidget/>
    </div>
  )
}


Tagline.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Tagline;  