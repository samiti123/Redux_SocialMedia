import React, { useEffect } from 'react';
import {
  Avatar,
  IconButton,
  Table,
  TableCell,
  TableRow,
} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import {
  addFriend,
  getUserFriends,
  unFriend,
} from '../../Redux/Action/userAction';
import CancelIcon from '@material-ui/icons/Cancel';
import { useStyles } from '../MyProfile/styles';

function MyFrndReqSent() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userData = useSelector((state) => state.users.userData);
  const users = useSelector((state) => state.users.users);
  useEffect(() => dispatch(getUserFriends(userData.friendRequestsSent)), []);

  return (
    <>
      <Table>
        {userData.friendRequestsSent.map((id) => {
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
                  className={classes.pendindReq}
                  onClick={() => dispatch(addFriend(id))}
                >
                  Request Pending...
                </IconButton>
              </TableCell>

              <TableCell>
                <IconButton
                  className={classes.unFriendicon}
                  onClick={() => dispatch(unFriend(id))}
                >
                  <CancelIcon />
                  cancel
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </Table>
    </>
  );
}

export default MyFrndReqSent;
