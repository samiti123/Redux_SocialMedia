import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  Link,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCommentIcon from '@material-ui/icons/AddComment';
import Popper from './Popper';
import { removePost } from '../../../Redux/Action/postAction';
import Comment from '../Comment/Comment';
import Editpost from '../EditPost/EditPost';
import { useStyles } from './styles';
import { loadUser } from '../../../Redux/Action/userAction';
import PostRef from './PostRef';

function Post({ post, index }) {
  const classes = useStyles();

  const author = useSelector((state) => state.users.users[post.author]) || {
    name: post.author,
  };

  const [showEdit, setShowEdit] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadUser(post.author)), []);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  function commentPopUP() {
    setShowComments(!showComments);
  }

  return (
    <>
      <Card key={index} fullwidth className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} src={author.avatar}></Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={author.name}
          subheader={'Posted ' + moment(post.createdAt).fromNow()}
        />

        <CardContent>
          <FormControl>
            <Typography variant='body2' color='inherit' component='p'>
              {post.images.length ? (
                <img
                  src={post.images || null}
                  alt=''
                  style={{
                    width: '200px',
                    height: '200px',
                    padding: '20px',
                  }}
                />
              ) : null}

              <h4>{post.message}</h4>
            </Typography>
          </FormControl>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton onClick={handleClick}>
            <ThumbUpAltIcon />
          </IconButton>

          {/* -----popper is included for reactions------ */}
          <Popper post={post} id={post.id} open={open} anchorEl={anchorEl} />

          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              dispatch(removePost(post.id));
            }}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              setShowEdit(true);
              setSelected(index);
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              setShowComment(true);
              setSelected(index);
            }}
          >
            <AddCommentIcon />
          </IconButton>

          <button onClick={commentPopUP}>showComments</button>

          {showEdit && selected === index ? (
            <Editpost post={post} setSelected={setSelected} />
          ) : null}

          {showComment && selected === index ? (
            <Comment post={post} setSelected={setSelected} />
          ) : null}
        </CardActions>
      </Card>

      {showComments
        ? post.comments.map((post, index) => (
            <PostRef post={post} key={post.id} index={index} />
          ))
        : null}
    </>
  );
}

export default Post;
