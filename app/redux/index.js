import { combineReducers } from 'redux';

import { gyms, singleGym } from './reducers';

export default combineReducers({
  gyms,
  singleGym
});
