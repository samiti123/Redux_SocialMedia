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

    '& a ': {
      color: 'white',
      textDecoration: 'none',
    },
  },
  textfield: {
    width: '800px',
  },
}));
