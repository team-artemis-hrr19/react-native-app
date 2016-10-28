import {Map, List} from 'immutable';
import chai from './_testHelper.js';

import {updateCurrentUser} from '../../app/store/reducers/auth/authLogic.js';

const expect = chai.expect;

describe('user state logic', () => {

  it('should be able to update currentUser', () => {
    const state = Map({user: null});
    const user = 'Tom';
    const nextState = Map({user: 'Tom'});
    expect(updateCurrentUser(state, user)).to.equal(nextState);
  });

});