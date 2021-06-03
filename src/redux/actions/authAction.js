import axios from 'axios';
import {Alert} from 'react-native';
import {SET_AUTH_STATE} from '../constants/action-type';
export function setToken(token) {
  return {
    type: SET_AUTH_STATE,
    payload: token,
  };
}

export function login(data: Object) {
  return dispatch => {
    axios
      .post('https://reqres.in/api/login', data)
      .then(response => {
        dispatch(setToken(response.data.token));
      })
      .catch(error => {
        Alert.alert('Connexion', 'Veuillez vérifier les informations saisies');
      });
  };
}

export function register(data: Object) {
  return dispatch => {
    axios
      .post('https://reqres.in/api/register', data)
      .then(response => {
        dispatch(setToken(response.data.token));
      })
      .catch(error => {
        Alert.alert(
          'Inscription',
          'Veuillez vérifier les informations saisies',
        );
      });
  };
}
