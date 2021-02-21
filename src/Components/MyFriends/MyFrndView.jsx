import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MyFriends from './MyFriends';
import MyFriendsRequests from './MyFriendsRequests';
import MyFrndReqSent from './MyFrndReqSent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: 'lightGrey',
    color: 'black',
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs className={classes.tabs} value={value} onChange={handleChange}>
          <Tab label='Friends' {...a11yProps(0)} />
          <Tab label='FriendRequests' {...a11yProps(1)} />
          <Tab label='FriendRequestsSent' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MyFriends />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyFriendsRequests />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyFrndReqSent />
      </TabPanel>
    </div>
  );
}
