import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from './types';


export const login = (email, password) => async(dispatch) => {

  try {
    // const response = await axios.post('/api/users/login', { email, password });
    dispatch({
      type: USER_LOGIN_SUCCESS
    });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.post('/api/users/login',
    { email, password },
    config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (err) {
    dispatch({ 
      type: USER_LOGIN_FAIL, 
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message });
  }
}

