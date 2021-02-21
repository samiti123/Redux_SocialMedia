import {
  Avatar,
  IconButton,
  Table,
  TableCell,
  TableRow,
} from '@material-ui/core';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addFriend, getUserFriends } from '../../Redux/Action/userAction';
import { useStyles } from './styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function UserFriends() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const userData = useSelector((state) => state.users.userData);
  const users = useSelector((state) => state.users.users);
  useEffect(() => dispatch(getUserFriends(userData.friends)), []);

  return (
    <>
      <Table>
        {userData.friends.map((id) => {
          const user = users[id];

          if (!user) return `${id}`;
          return (
            <TableRow>
              <TableCell>
                <Avatar className={classes.avatar} src={user.avatar}></Avatar>
              </TableCell>

              <TableCell>{user.name}</TableCell>

              <TableCell>
                <IconButton
                  className={classes.addfriendIcon}
                  onClick={() => dispatch(addFriend(id))}
                >
                  <CheckCircleIcon />
                  AddFriend
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </>
  );
}

export default UserFriends;
