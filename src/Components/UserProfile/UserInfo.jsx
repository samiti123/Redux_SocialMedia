import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MailIcon from '@material-ui/icons/Mail';
import {
  addFriend,
  getUser,
  getUserPosts,
} from '../../Redux/Action/userAction';
import { Avatar, IconButton, Link } from '@material-ui/core';
import { sendMessage } from '../../Redux/Action/postAction';
import SendMsg from '../Message/SendMsg';

function UserInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.auth);
  console.log(id);
  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  console.log(user.userPosts);

  return (
    <>
      <Avatar
        src={user.userData.avatar}
        style={{
          width: '150px',
          height: '150px',
          padding: '20px',
        }}
      />
      <h1>{user.userData.name}</h1>
      <h2>{user.userData.email}</h2>

      <button onClick={() => dispatch(addFriend(user.userData.id))}>
        Add User
      </button>

      <IconButton onClick={() => dispatch(sendMessage(user.userData.id))}>
        <Link href='/message'>
          <MailIcon />
        </Link>
      </IconButton>

      {/* <SendMsg /> */}
    </>
  );
}

export default UserInfo;
