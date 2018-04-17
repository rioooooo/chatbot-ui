import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const configureStore = (preloadedState = { chats: [], details: {} }) => {
  const store = createStore(reducer, preloadedState);
  return store;
};

export default configureStore;
