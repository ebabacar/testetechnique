import {CREATE_USERS_STATE, GET_USERS_STATE} from '../constants/action-type';

const initialState = {
  userList: [],
};

const initialStateCreate = {
  listUserCreated: [],
};

export function getUserReducer(state = initialState, action) {
  if (action.type === GET_USERS_STATE) {
    state.userList = action.payload;
  }
  return state;
}

export function createUserReducer(state = initialStateCreate, action) {
  if (action.type === CREATE_USERS_STATE) {
    let relai = state.listUserCreated;
    relai.push(action.payload);
    state.listUserCreated = relai;
  }
  return state;
}
