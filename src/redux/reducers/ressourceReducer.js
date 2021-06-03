import {GET_RESSOURCE_STATE} from '../constants/action-type';

const initialState = {
  ressourceList: [],
};

export default function ressourcehReducer(state = initialState, action) {
  if (action.type === GET_RESSOURCE_STATE) {
    state.ressourceList = action.payload;
  }
  return state;
}
