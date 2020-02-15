import { combineReducers } from 'redux';

import { gyms, singleGym, singleRoute } from './reducers';

export default combineReducers({
  gyms,
  singleGym,
  singleRoute
});
