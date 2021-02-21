import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/Action/authAction';
import { useHistory } from 'react-router-dom';

function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    name: '',
    gmail: '',
    password: '',
  });

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Name'
            autoFocus
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />

          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            type='gmail'
            label='Gmail Address'
            onChange={(e) => setState({ ...state, gmail: e.target.value })}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Password'
            type='password'
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={(e) => {
              e.preventDefault();
              dispatch(register(state, history));
            }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link href='/login' variant='body2'>
                {'Already have an account? Login'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Register;
