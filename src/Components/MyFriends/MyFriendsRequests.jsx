import {
  Avatar,
  IconButton,
  Table,
  TableCell,
  TableRow,
} from '@material-ui/core';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addFriend,
  getUserFriends,
  unFriend,
} from '../../Redux/Action/userAction';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStyles } from '../MyProfile/styles';

function MyFriendsRequests() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userData = useSelector((state) => state.users.userData);
  const users = useSelector((state) => state.users.users);
  useEffect(() => dispatch(getUserFriends(userData.friendRequests)), []);

  return (
    <>
      <Table>
        {userData.friendRequests.map((id) => {
          const user = users[id];
          if (!user) return `${id}`;
          return (
            <TableRow>
              <TableCell>
                <Avatar src={user.avatar}></Avatar>
              </TableCell>

              <TableCell>{user.name}</TableCell>

              <TableCell>
                <IconButton
                  className={classes.unFriendicon}
                  onClick={() => dispatch(addFriend(id))}
                >
                  <CheckCircleIcon />
                  AddUser
                </IconButton>
              </TableCell>

              <TableCell>
                <IconButton
                  className={classes.unFriendicon}
                  onClick={() => dispatch(unFriend(id))}
                >
                  <CancelIcon />
                  Reject User
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </>
  );
}

export default MyFriendsRequests;
