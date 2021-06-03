import axios from 'axios';
import {Alert} from 'react-native';
import {GET_RESSOURCE_STATE} from '../constants/action-type';
export function setRessourceList(ressourceList) {
  return {
    type: GET_RESSOURCE_STATE,
    payload: ressourceList,
  };
}

export function getRessourceList(per_page) {
  return dispatch => {
    axios
      .get('https://reqres.in/api/unknown/?per_page=' + per_page)
      .then(response => {
        dispatch(setRessourceList(response.data.data));

      })
      .catch(error => {});
  };
}
