import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import Root from './Redux/Root';

const composeWithDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  Root,
  composeWithDevTool(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem('sample', JSON.stringify(store.getState().auth));
});
