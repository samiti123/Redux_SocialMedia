import axios from '../../Axios';

const url = 'https://sz.hktr.de/api';
//const url = 'http://danyloveselyi.me:3000/api';

export const getPost = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/post`);

    dispatch({
      type: 'GET_POST',
      postData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (postData, images) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/post`, postData, images);

    dispatch({
      type: 'ADD_POST',
      postData: response.data,
      images,
    });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (post) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/post/${post.id}`, {
      message: post.message,
    });
    console.log(response.data);
    dispatch({
      type: 'COMMENT_POST',
      postData: response.data,
    });
    await getPost()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (postData) => async (dispatch) => {
  console.log(postData);
  try {
    const response = await axios.patch(`${url}/post/${postData.id}`, {
      message: postData.message,
    });
    console.log(response.data);
    dispatch({
      type: 'EDIT_POST',
      postData: response.data,
    });
    await getPost()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const removePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`${url}/post/${postId}`);

    dispatch({
      type: 'REMOVE_POST',
    });
    await getPost()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (postId, reaction) => async (dispatch) => {
  console.log(postId);
  try {
    const response = await axios.put(`${url}/like/post/${postId}/${reaction}`);
    console.log(response.data);
    dispatch({
      type: 'LIKE_POST',
      postData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReaction = (postId, reaction) => async (dispatch) => {
  console.log(postId);
  try {
    const response = await axios.delete(
      `${url}/like/post/${postId}/${reaction}`
    );
    console.log(response.data);
    dispatch({
      type: 'DELETE_REACTION',
      postData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendMessage = (userId, images) => async (dispatch) => {
  console.log(userId);
  try {
    const response = await axios.post(`${url}/message/${userId}`, {
      message: userId.message,
    });
    console.log(response.data);
    dispatch({
      type: 'SEND_MESSAGE',
      postData: response.data,
      images,
    });
    //await getPost(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/post/${id}`);
    console.log(response.data);
    if (response.status == 200)
      dispatch({
        type: 'GET_POSTBY_ID',
        postData: response.data,
        id,
      });
  } catch (error) {
    console.log(error);
  }
};
