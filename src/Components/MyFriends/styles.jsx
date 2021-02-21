import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    marginBottom: '15px',
    marginLeft: '100px',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    '&> div': {
      marginTop: theme.spacing(1),
    },
    '&> div:first-of-type': {
      marginTop: 0,
    },
  },
  large: {
    width: 50,
    height: 50,
  },

  myprofile: {
    marginLeft: '30px',
  },

  unFriendicon: {
    fontSize: '13px',
  },
  pendindReq: {
    fontSize: '13px',
  },
  MuiAppBar: {
    backgroundColor: 'red',
  },
}));
