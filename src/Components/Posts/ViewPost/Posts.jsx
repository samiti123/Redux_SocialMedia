import { Container, Popper } from '@material-ui/core';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import Post from './Post';

function Posts() {
  const classes = useStyles();
  const user = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <Container className={classes.rootGrid}>
        {posts.postData.map((post, index) => (
          <Post post={post} key={post.id} index={index} />
        ))}
      </Container>
    </div>
  );
}

export default Posts;
