import {
  Avatar,
  IconButton,
  Table,
  TableCell,
  TableRow,
} from '@material-ui/core';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUserFriends, unFriend } from '../../Redux/Action/userAction';
import CancelIcon from '@material-ui/icons/Cancel';

import { useStyles } from '../MyProfile/styles';

function MyFriends() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users.userData);

  const users = useSelector((state) => state.users.users);

  useEffect(() => dispatch(getUserFriends(userData.friends)));

  return (
    <>
      <Table>
        {userData.friends.map((id) => {
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
                  onClick={() => dispatch(unFriend(id))}
                >
                  <CancelIcon />
                  unFriend
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </>
  );
}
export default MyFriends;
