import {
  Button,
  Card,
  CardActions,
  CardHeader,
  TextField,
} from '@material-ui/core';
import { useState } from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../Redux/Action/postAction';
import { DropzoneDialog } from 'material-ui-dropzone';

export default function AddPost() {
  const classes = useStyles();

  const [state, setState] = useState({ message: '', images: [] });
  const dispatch = useDispatch();

  function handleOpen() {
    setState({ ...state, open: true });
  }

  function handleSave(images) {
    const reader = new FileReader();

    if (images[0]) {
      reader.readAsDataURL(images[0]);
    }
    reader.addEventListener(
      'load',
      function () {
        //dispatch(addPost(reader.result));
        setState({ ...state, open: false, images: reader.result });
      },
      false
    );
  }

  function handleClose() {
    setState({ ...state, open: false });
  }

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader title='Create Post' />
      <form noValidate>
        {state.images.length ? (
          <img
            src={state.images || null}
            alt=''
            style={{
              width: '200px',
              height: '200px',
              padding: '20px',
            }}
          />
        ) : null}
        <div>
          <TextField
            className={classes.textfield}
            id='outlined-multiline-static'
            label='Write Post Here'
            multiline
            rows={5}
            value={state.message}
            variant='outlined'
            onChange={(e) =>
              setState({
                ...state,
                message: e.target.value,
              })
            }
          />
        </div>
        <CardActions>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => {
              e.preventDefault();
              dispatch(addPost(state));
            }}
          >
            <Link to='/nisa'>Post</Link>
          </Button>

          <Button onClick={handleOpen}>Insert Images</Button>
          <DropzoneDialog
            open={state.open}
            onSave={handleSave}
            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
            showPreviews={true}
            maxFileSize={5000000}
            onClose={handleClose}
          />
        </CardActions>
      </form>
    </Card>
  );
}
