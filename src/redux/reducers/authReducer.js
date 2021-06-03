import {SET_AUTH_STATE} from '../constants/action-type';

const initialState = {
  token: '',
};

export function authReducer(state = initialState, action) {
  if (action.type === SET_AUTH_STATE) {
    state.token = action.payload;
  }
  return state;
}

