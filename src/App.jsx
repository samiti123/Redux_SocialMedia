import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AddPost from './Components/Posts/AddPost/AddPosts';
import Posts from './Components/Posts/ViewPost/Posts';
import { getPost } from './Redux/Action/postAction';
import Navigation from './Components/Container/Navigation/Navigation';
import CheckAuth from './Components/Auth/AuthInfo/CheckAuth';
import IfAuth from './Components/Auth/ifAuth';
import UserProfile from './Components/UserProfile/UserProfile';

import StatusSnackbar from './Components/Auth/AuthInfo/SnackbarStatus';
import MyProfileView from './Components/MyProfile/MyProfileView';
import SendMsg from './Components/Message/SendMsg';
import Comment from './Components/Posts/Comment/Comment';
import MyInfo from './Components/MyProfile/MyInfo';
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth.refreshToken);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div>
      <h1>sami</h1>
      <h2>sami11</h2>
      <CheckAuth />
      <StatusSnackbar />
      <IfAuth>
        <Navigation />

        <Switch>
          <Route path='/post/add' component={AddPost} />
          <Route exact path='/nisa' component={Posts} />
          <Route path='/user/:id' component={UserProfile} />
          <Route path='/profile/:id' component={MyProfileView} />
          <Route path='/message' component={SendMsg} />
          <Route path='/setting' component={MyInfo} />
          {/* <Route path='/comment' component={Comment} /> */}
        </Switch>
      </IfAuth>
    </div>
  );
}

export default App;
