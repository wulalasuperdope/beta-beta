import { SET_GYMS, SET_GYM, SET_ROUTE } from './constants';

export const setGyms = gyms => {
  return {
    type: SET_GYMS,
    gyms
  };
};

export const setGym = gym => {
  return {
    type: SET_GYM,
    gym
  };
};

export const setRoute = route => {
  return {
    type: SET_ROUTE,
    route
  };
};
