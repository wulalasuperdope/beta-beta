import axios from 'axios';

import { setGyms, setGym } from '../actions';

export function fetchGyms() {
  return function thunk(dispatch) {
    return axios
      .get('/api/gyms')
      .then(res => dispatch(setGyms(res.data)))
      .catch(e => console.log(e));
  };
}
