export const LOGIN = 'LOGIN';

export const login = (profile) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/login', {
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(profile),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  });

  const user = await response.json();
  dispatch({
    type: LOGIN,
    user
  })
}