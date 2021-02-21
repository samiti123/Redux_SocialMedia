const defaultState = {
  search: {},
  userData: [],
  userPosts: [],
  users: {},
};

const userReducer = (state = defaultState, action) => {
  const { list, model, field, match } = action;

  switch (action.type) {
    case 'SEARCH_RESULT':
      return { ...state, search: { list, model, field, match } };

    case 'SEARCH_CHANGE':
      return { ...state, search: { model, field, match } };

    case 'GET_USER':
      //return state;
      return { ...state, userData: action.userData };

    case 'LOAD_USER':
      return {
        ...state,
        users: { ...state.users, [action.userData.id]: action.userData },
      };

    case 'GETUSER_POST':
      return { ...state, userPosts: action.userPosts };

    case 'GETUSER_FRIENDS':
      return {
        ...state,
        users: { ...state.users, [action.user.id]: action.user },
      };

    case 'AVATAR':
      return { ...state, userData: action.userData };

    case 'ADDFRIEND':
      return { ...state, userData: action.userData };

    case 'UNFRIEND':
      return { ...state, userData: action.userData };

    default:
      return state;
  }
};

export default userReducer;
