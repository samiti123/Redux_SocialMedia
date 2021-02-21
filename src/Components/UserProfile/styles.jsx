import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
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
  addfriendIcon: {
    fontSize: '12px',
  },
}));
