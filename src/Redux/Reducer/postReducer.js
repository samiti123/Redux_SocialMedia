const defaultState = {
  postData: [],
  messages: [],
  byId: {},
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_POST':
      return {
        ...state,
        postData: action.postData,
      };

    case 'ADD_POST':
      return {
        ...state,
        postData: [action.postData, ...state.postData],
      };

    case 'COMMENT_POST':
      return {
        ...state,
        postData: [action.postData, ...state.postData],
      };

    case 'EDIT_POST':
      let newPostData = [...state.postData].map((post) =>
        post.id == action.postData.id ? action.postData : post
      );
      return {
        ...state,
        postData: [action.postData, ...state.postData],
      };

    case 'REMOVE_POST':
      return state;

    case 'LIKE_POST':
      return {
        ...state,

        postData: [...state.postData].map((post) =>
          post.id == action.postData.id ? action.postData : post
        ),
      };

    case 'DELETE_REACTION':
      return {
        ...state,

        postData: [...state.postData].map((post) =>
          post.id == action.postData.id ? action.postData : post
        ),
      };

    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [action.postData, ...state.postData],
      };

    case 'GET_POSTBY_ID':
      return {
        ...state,
        byId: { ...state.byId, [action.id]: action.postData },
      };

    default:
      return state;
  }
};

export default postReducer;
