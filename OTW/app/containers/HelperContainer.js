import React from 'react';
import {connect} from 'react-redux';

import Helper from '../components/Helper';

const mapStateToProps = (state) => {
  return {
    helpees: state.helpeesState
  }
};

const HelperContainer = connect(
  mapStateToProps,
  null
)(Helper)

export default HelperContainer;