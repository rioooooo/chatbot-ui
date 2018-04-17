import { combineReducers } from 'redux';
import {
  RECEIVE_SUNNY,
  RECEIVE_USER,
  CHANGE_DETAILS,
  RECEIVE_ERROR,
  RECEIVE_URL,
  RECEIVE_CID,
} from '../actions/actions';


const chatsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_SUNNY:
      nextState = state.concat([action.sunnyText]);
      return nextState;
    case RECEIVE_USER:
      nextState = state.concat([action.userText]);
      return nextState;
    case RECEIVE_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

const detailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case CHANGE_DETAILS:
      nextState = { details: action.details };
      return nextState;
    default:
      return state;
  }
};

const URLReducer = (state = '', action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_URL:
      nextState = action.newURL;
      return nextState;
    default:
      return state;
  }
};

const CIDReducer = (state = '', action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_CID:
      nextState = action.newCID;
      return nextState;
    default:
      return state;
  }
};

const reducer = combineReducers({
  chats: chatsReducer,
  details: detailsReducer,
  newURL: URLReducer,
  newCID: CIDReducer,
});

export default reducer;
