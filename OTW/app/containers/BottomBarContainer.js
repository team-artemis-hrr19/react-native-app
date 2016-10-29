import {connect} from 'react-redux';

import BottomBar from '../components/BottomBar';

const mapStateToProps = function(state) {
  return {
    location: state.locationState
  }
}

const BottomBarContainer = connect(mapStateToProps, null)(BottomBar);

export default BottomBarContainer;