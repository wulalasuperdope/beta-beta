import axios from 'axios';
import { setRoute } from '../actions';

export function fetchRoute(gymId, routeId) {
  return function thunk(dispatch) {
    return axios
      .get(`/api/gyms/${gymId}/${routeId}`)
      .then(res => {
        // console.log(res.data);
        dispatch(setRoute(res.data));
      })
      .catch(e => console.log(e));
  };
}
