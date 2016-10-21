import React, { Component } from 'react';
import {connect} from 'react-redux';

import {push, pop} from '../actions/navActions';
import NavRoot from '../components/NavRoot';

function mapStateToProps(state){
  console.log('state', state);
  //FIXME state doesn't have this property, only navigationState
  return {
    navigation: state.navigationState //is state.navReducer a valid value?
  };
}

function mapDispatchToProps (dispatch) {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop())
  };
}

// for some reason prop navigation is not available
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavRoot);