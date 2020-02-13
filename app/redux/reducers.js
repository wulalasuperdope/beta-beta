import { SET_GYMS, SET_GYM } from './constants';

export const gyms = (state = [], action) => {
  switch (action.type) {
    case SET_GYMS:
      return action.gyms;
    default:
      return state;
  }
};

export const singleGym = (state = {}, action) => {
  switch (action.type) {
    case SET_GYM:
      return action.gym;
    default:
      return state;
  }
};
