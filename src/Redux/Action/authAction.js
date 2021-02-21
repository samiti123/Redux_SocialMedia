import axios from '../../Axios';

const url = 'https://sz.hktr.de/api';
//const url = 'http://danyloveselyi.me:3000/api';

export const login = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/auth/login`, userData);
    console.log(response.data);
    dispatch({
      type: 'LOGIN',
      status: true,
      message: 'Success',
      userData: response.data,
      token: response.data.tokens.access.token,
      refreshToken: response.data.tokens.refresh.token,
    });
    history.push('/');
    dispatch(statusShow(false, 'logged in succesfully'));
  } catch (error) {
    dispatch(statusShow(true, error.message));

    console.log(error);
  }
};

export const register = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/auth/register`, userData);
    console.log(response.data);
    dispatch({
      type: 'REGISTER',
      status: true,
      userData: response.data,
      token: response.data.tokens.access.token,
      refreshToken: response.data.tokens.refresh.token,
    });
    history.push('/');
    dispatch(statusShow(false, 'Registred succesfully'));
  } catch (error) {
    dispatch(statusShow(true, error.message));
  }
};

export const logout = (userData) => async (dispatch) => {
  try {
    await axios.post(`${url}/auth/logout`, {
      refreshToken: userData,
    });

    dispatch({ type: 'LOGOUT' });
    dispatch(statusShow(false, 'logged out succesfully'));
  } catch (error) {
    console.log(error);
  }
};

export const unregister = (userId, userToken) => async (dispatch) => {
  try {
    await axios.delete(`${url}/user/${userId}`, { token: userToken });

    dispatch({ type: 'UNREGISTER' });
  } catch (error) {
    console.log(error);
  }
};

export const statusHide = () => ({ type: 'auth:status:hide' });

export const statusShow = (code, message) => ({
  type: 'auth:status:show',
  code,
  message,
});
