import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../../Redux/Action/postAction';
import Post from './Post';

function PostRef({ post }) {
  const loadedPost = useSelector((state) => state.posts.byId[post]);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getPostById(post)), [post, dispatch]);

  if (!loadedPost) return null;

  return <Post post={loadedPost} />;
}

export default PostRef;
