import axios from '../../Axios';

let defaultState = {
  userData: [],
  token: false,
  refreshToken: false,
  status: {
    code: false,
    message: false,
  },
  showStatus: false,
};

const localStorageState = JSON.parse(localStorage.getItem('sample'));
if (localStorageState) {
  defaultState = localStorageState;
  if (defaultState.token)
    axios.tokens = { access: { token: defaultState.token } };
}
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      axios.tokens = { access: { token: action.token } };
      return {
        userData: action.userData,
        token: action.token,
        refreshToken: action.refreshToken,
        status: action.status,
      };

    case 'LOGOUT':
      //delete axios.tokens;
      axios.tokens = false;
      return {
        userData: [],
        token: false,
        refreshToken: false,
        status: true,
      };

    case 'REGISTER':
      axios.tokens = { access: { token: action.token } };
      return {
        userData: action.userData,
        token: action.token,
        refreshToken: action.refreshToken,
        status: action.status,
      };

    case 'UNREGISTER':
      localStorage.removeItem('sample');
      return defaultState;

    case 'auth:status:show':
      return {
        ...state,
        showStatus: true,
        status: {
          code: action.code,
          message: action.message,
        },
      };

    case 'auth:status:hide':
      return {
        ...state,
        showStatus: false,
      };

    default:
      return state;
  }
};

export default authReducer;
