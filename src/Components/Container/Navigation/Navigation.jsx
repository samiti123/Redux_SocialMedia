import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import Logo from '../../Logo/croped.png';
import { getPost, sendMessage } from '../../../Redux/Action/postAction';
import { logout, unregister } from '../../../Redux/Action/authAction';
import Search from '../../Search/Search';

export default function Navigation() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const state = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} className={classes.mobileicon}>
        <Link to={`/profile/${state.userData.user.id}`}>Profile</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose} className={classes.mobileicon}>
        <Link to='/setting'>Setting</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose} className={classes.mobileicon}>
        <Link to='/post/add'>AddPost</Link>
      </MenuItem>

      <MenuItem
        onClick={() => {
          dispatch(logout(state.refreshToken));
        }}
      >
        Logout
      </MenuItem>

      <MenuItem
        onClick={() => {
          dispatch(unregister(state.userData.user.id, state.token));
        }}
      >
        Unregister
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div className={classes.mobileicon}>
        <Link to='/message'>
          <MenuItem>
            <IconButton aria-label='show 4 new mails' color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
        </Link>

        <Link to='/nisa'>
          <MenuItem>
            <IconButton color='inherit'>
              <Badge>
                <HomeIcon />
              </Badge>
            </IconButton>
            <p>Home</p>
          </MenuItem>
        </Link>

        <Link to='/group'>
          <MenuItem>
            <IconButton color='inherit'>
              <Badge>
                <GroupIcon />
              </Badge>
            </IconButton>
            <p>Groups</p>
          </MenuItem>
        </Link>

        <Link to='/notification'>
          <MenuItem>
            <IconButton aria-label='show 11 new notifications' color='inherit'>
              <Badge badgeContent={11} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
        </Link>
      </div>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <img src={Logo} alt='logo' className={classes.logo} />

          <Search className={classes.search} />

          <div className={classes.sectionDesktop}>
            <div className={classes.linkicon}>
              <Link to='/nisa'>
                <HomeIcon />
              </Link>
            </div>

            <div className={classes.linkicon}>
              <Link to='/group'>
                <GroupIcon />
              </Link>
            </div>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label='show 4 new mails' color='inherit'>
              <Badge
                badgeContent={4}
                color='secondary'
                className={classes.linkicon}
              >
                <Link to='/message'>
                  <MailIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton aria-label='show 17 new notifications' color='inherit'>
              <Badge
                badgeContent={17}
                color='secondary'
                className={classes.linkicon}
              >
                <Link to='/notification'>
                  <NotificationsIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
