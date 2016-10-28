import {connect} from 'react-redux';

import Home from '../components/Home';

function mapStateToProps(state){
  return {
    user: state.userState
  }
}

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;