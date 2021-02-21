import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getMyPosts, getUser } from '../../Redux/Action/userAction';

import Post from '../Posts/ViewPost/Post';

function MyPosts() {
  const { id } = useParams();

  const userPosts = useSelector((state) => state.users.userPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getMyPosts());
  }, [dispatch, id]);

  return (
    <>
      {userPosts.map((post, index) => (
        <Post post={post} key={post.id} index={index} />
      ))}
    </>
  );
}

export default MyPosts;
