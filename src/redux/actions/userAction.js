import axios from 'axios';
import {CREATE_USERS_STATE, GET_USERS_STATE} from '../constants/action-type';
import {Alert} from 'react-native';
export function setUserList(userList) {
  return {
    type: GET_USERS_STATE,
    payload: userList,
  };
}

export function userCreated(userCreate) {
  return {
    type: CREATE_USERS_STATE,
    payload: userCreate,
  };
}

export function getUserList(per_page) {
  return dispatch => {
    axios
      .get('https://reqres.in/api/users?per_page=' + per_page)
      .then(response => {
        dispatch(setUserList(response.data.data));
      })
      .catch(error => {});
  };
}

export function createUser(data) {
  return dispatch => {
    axios
      .post('https://reqres.in/api/users', data)
      .then(response => {
        dispatch(userCreated(response.data));
        Alert.alert('Status', 'Utilisateur Créer avec succées');
      })
      .catch(error => {
        Alert.alert('Status', 'Echec lors de la création');
      });
  };
}
