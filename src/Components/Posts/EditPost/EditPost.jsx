import {
  Button,
  Card,
  CardActions,
  CardHeader,
  TextField,
} from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { editPost } from '../../../Redux/Action/postAction';

export default function Editpost({ post, setSelected }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [editPostMessage, setEditPostMessage] = useState({
    message: post.message,
    id: post.id,
  });

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader title='Edit Post' />
      <form noValidate>
        <div>
          <TextField
            id='outlined-multiline-static'
            label='Edit Your Post '
            multiline
            rows={4}
            value={editPostMessage.message}
            onChange={(e) =>
              setEditPostMessage({
                ...editPostMessage,
                message: e.target.value,
              })
            }
            variant='outlined'
          />
        </div>
        <CardActions>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => {
              e.preventDefault();
              dispatch(editPost(editPostMessage));
              setSelected(-1);
            }}
          >
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
