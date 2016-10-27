import React from 'react';
import {connect} from 'react-redux';

import {updateUser} from '../actions/userActions';
import SignIn from '../components/signIn';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  };
}

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInContainer;