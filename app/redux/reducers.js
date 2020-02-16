import { SET_GYMS, SET_GYM, SET_ROUTE } from './constants';

export const gyms = (state = [], action) => {
  switch (action.type) {
    case SET_GYMS:
      return action.gyms;
    default:
      return state;
  }
};

export const singleGym = (
  state = { name: '', iamge: '', map: '', routes: [] },
  action
) => {
  switch (action.type) {
    case SET_GYM:
      return action.gym;
    default:
      return state;
  }
};

export const singleRoute = (
  state = {
    grade: '',
    holdColor: '',
    wallLocation: '',
    image: '',
    videos: []
  },
  action
) => {
  switch (action.type) {
    case SET_ROUTE:
      return action.route;
    default:
      return state;
  }
};
