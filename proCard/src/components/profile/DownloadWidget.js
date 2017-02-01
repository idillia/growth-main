import React, {PropTypes} from 'react';

const DownloadWidget = () => {
  return (
    <div>
      <div className = "row text-widget text-me-hide">
          <div className = "col-lg-12"><iframe frameBorder="0" height="80" marginHeight="0" marginWidth="0" src="https://api.linktexting.com/linkEmbed/6257b294-41ee-4546-a802-098bce68f1ea?autoIp=true" width="420"></iframe></div>
      </div>  
      <div className = "row">  
          <div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="btn btn-primary gc-btn-red" id="apple-link">
              <a target="_blank" href= "https://app.adjust.com/a04tv6">
                <div className="dnld-icon icon-social-apple"></div>
                <div><i className="fa fa-apple" aria-hidden="true"></i>iOS</div>
              </a>
            </div>
          </div>

          <div className= "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="btn btn-primary gc-btn-orange" id="android-link">
              <a target="_blank" href= " https://app.adjust.com/a04tv6?fallback=https://play.google.com/store/apps/details?id=co.good.android&hl=en">
                <div className="dnld-icon icon-play"></div>
                <div><i className="fa fa-android" aria-hidden="true"></i>Google</div>
              </a>  
            </div>
          </div>
      </div>    
    </div>
  );
};


export default DownloadWidget;



