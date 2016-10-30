import {connect} from 'react-redux';

import UserBar from '../components/UserBar';

const mapStateToProps = function(state) {
  return {
    user: state.userState
  };
}

const UserBarContainer = connect(
  mapStateToProps
)(UserBar);

export default UserBarContainer;