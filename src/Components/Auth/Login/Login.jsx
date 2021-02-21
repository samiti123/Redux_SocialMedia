import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { login } from '../../../Redux/Action/authAction';
import { useHistory } from 'react-router-dom';

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: 'samuel.teklay2001@gmail.com',
    password: 'samuel123456',
  });

  return (
    <>
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
              defaultValue='samuel.teklay2001@gmail.com'
              type='gmail'
              label='Gmail Address'
              autoFocus
              onChange={(e) => setState({ ...state, gmail: e.target.value })}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Password'
              type='password'
              defaultValue='samuel123456'
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
                dispatch(login(state, history));
              }}
            >
              Login
            </Button>

            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href='/register' variant='body2'>
                  {"Don't have an account? Register!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;
