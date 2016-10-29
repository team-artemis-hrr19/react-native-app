import React from 'react';
import {connect} from 'react-redux';

import Help from '../components/Help';
import {updateLocation} from '../actions/locationActions';

const mapDispatchToProps = function(dispatch) {
  return {
    updateLocation: ({lat, long}) => dispatch(updateLocation({lat, long}))
  }
};

const HelpContainer = connect(
  null,
  mapDispatchToProps
)(Help)

export default HelpContainer;