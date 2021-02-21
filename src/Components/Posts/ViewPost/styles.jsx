import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    marginBottom: '15px',
    marginLeft: '100px',
    '& .MuiCardHeader-title.MuiTypography-body2': {
      fontWeight: 'bold',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: 'blue',
  },
  rootGrid: {
    display: 'flex',

    flexDirection: 'column',

    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '20px',
    backgroundColor: 'theme.palette.background.paper',
  },

  like: {
    color: 'red',
  },
}));
