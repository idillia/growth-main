import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';
import toastr from 'toastr';
import ProfileListRow from './../profile/ProfileListRow';
import Avatar from './../profile/Avatar';

export class ImagePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      profile: Object.assign({}, this.props.profile),
      imageStatus: null 
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.profile.id != nextProps.profile.id) {
      this.setState({profile: Object.assign({}, nextProps.profile)});
    }
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  render() {
    let hideImg = {display: 'none'};
    const profile = this.state.profile;

    if(this.state.imageStatus == null) {
      hideImg = {display: 'none'};
    } else {
      hideImg = {display: 'block'};
    }

    return (
      <div >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="twitter-avatar tile">
              <div className = "ProfileAvatar" style = {hideImg}>
                <img src= {profile.image_url} className="ProfileAvatar-image"  onLoad={this.handleImageLoaded.bind(this)}  />
              </div>  
              <div className="twitter-name">{profile.name}</div>
            </div>
          </div>
        </div>     
        <div className="row sc-wrapper">
          <div className="col-lg-12 col-md-12 col-sm-12"><ProfileListRow profile = {profile}/></div>
        </div>  
      </div>
    );
  }

}

ImagePage.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {

  let profile = {
    "id":"",
    "screen_name": "",
    "name": "",
    "followers": 0,
    "creation_date": "",
    "pa": [["Maverick", "Maverick", "Maverick"]],
    "sw": [["the_maverick","the_maverick","the_maverick","the_maverick","the_maverick","the_maverick"]],
    "pabs": [["the_maverick"]],
    "image_url": "",
    "tweets": "",
    "time_zone": "",
    "creation_date_filter": "",
    "is_everyday_filter": "",
    "folowers_count_filter": ""
  };

  if(!Array.isArray(state.profiles)) {
    profile = state.profiles
  }

  return {
    profile: profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);