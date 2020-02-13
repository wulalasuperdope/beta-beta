import { SET_GYMS, SET_GYM } from './constants';

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
