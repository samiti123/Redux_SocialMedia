import axios from '../../Axios';

const url = 'https://sz.hktr.de/api';
//const url = 'http://danyloveselyi.me:3000/api';

export const searchUser = (match, type = 'User', field = 'name') => async (
  dispatch
) => {
  try {
    const response = await axios.post(`${url}/search`, {
      match,
      type,
      field,
    });

    dispatch({
      type: 'SEARCH_RESULT',
      list: response.data,
      model: type,
      field,
      match,
    });
  } catch (error) {
    console.log(error);
  }
};

let count = 0;
export const getUser = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/user/${userId}`);
    console.log(count++);
    dispatch({
      type: 'GET_USER',
      userData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadUser = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/user/${userId}`);

    dispatch({
      type: 'LOAD_USER',
      userData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/user/posts/${userId}`);
    console.log(response.data);
    dispatch({
      type: 'GETUSER_POST',
      userPosts: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPostsOnly = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/post/from/${userId}`);
    console.log(response.data);
    dispatch({
      type: 'GETUSER_POST',
      userPosts: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMyPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/post/mine`);
    console.log(response.data);
    dispatch({
      type: 'GETUSER_POST',
      userPosts: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addFriend = (userId) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/friends/approve/`, {
      id: userId,
    });
    console.log(response.data);
    dispatch({
      type: 'ADDFRIEND',
      userData: response.data,
    });
    await getUser(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const unFriend = (userId) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/friends/reject/`, {
      id: userId,
    });
    console.log(response.data);
    dispatch({
      type: 'UNFRIEND',

      userData: response.data,
    });
    await getUser(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const getUserFriends = (arrayOfUserIds) => (dispatch) => {
  arrayOfUserIds.map((id) =>
    axios.get(`${url}/user/${id}`).then((response) =>
      dispatch({
        type: 'GETUSER_FRIENDS',
        user: response.data,
      })
    )
  );
};

export const changeAvatar = (avatar) => async (dispatch) => {
  try {
    const response = await axios.patch(`${url}/user/`, { avatar });
    console.log(response.data);
    dispatch({
      type: 'AVATAR',

      userData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addImages = (images) => async (dispatch) => {
  try {
    const response = await axios.patch(`${url}/post/`, { images });
    console.log(response.data);
    dispatch({
      type: 'ADD_IMAGES',
      images: images,
      userData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
