import {createStore, combineReducers} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from '../reducers/authReducer';
import ressourcehReducer from '../reducers/ressourceReducer';
import {getUserReducer} from '../reducers/userReducer';
import {createUserReducer} from '../reducers/userReducer';

const rootReducer = combineReducers({
  token: authReducer,
  ressourceList: ressourcehReducer,
  userList: getUserReducer,
  listUserCreated: createUserReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
