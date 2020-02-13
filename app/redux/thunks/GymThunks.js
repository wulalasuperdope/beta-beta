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

export function fetchGym(gymId) {
  return function thunk(dispatch) {
    console.log('calling fetchGym thunk');
    return axios
      .get(`/api/gyms/${gymId}`)
      .then(res => {
        console.log('gym fetched');
        console.log(res.data);
        dispatch(setGym(res.data));
      })
      .catch(e => console.log(e));
  };
}
