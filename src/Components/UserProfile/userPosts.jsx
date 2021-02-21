import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserPostsOnly } from '../../Redux/Action/userAction';

import Post from '../Posts/ViewPost/Post';

function UserPosts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPostsOnly(id));
  }, [dispatch, id]);

  console.log(user.userPosts);

  return (
    <>
      {user.userPosts.map((post, index) => (
        <Post post={post} key={post.id} index={index} />
      ))}
    </>
  );
}

export default UserPosts;
