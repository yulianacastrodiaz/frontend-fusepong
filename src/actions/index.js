import axios from 'axios';
export const LOGIN = 'LOGIN';

export const login = (u) => async (dispatch) => {
  try {

    const response = await axios.post('http://localhost:3001/login', {
      username: u.username,
      password: u.password
    });
    console.log(response.data)
    // const user = await response.json();
    dispatch({
      type: LOGIN,
      user: response.data
    })
  } catch (error) {
    console.log(error);
  }
}