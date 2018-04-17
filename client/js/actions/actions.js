export const RECEIVE_SUNNY = 'RECEIVE_SUNNY';
export const RECEIVE_USER = 'RECEIVE_USER';
export const CHANGE_DETAILS = 'CHANGE_DETAILS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_URL = 'RECEIVE_URL';
export const RECEIVE_CID = 'RECEIVE_CID';

export const receiveSunny = sunnyText => ({
  type: RECEIVE_SUNNY,
  sunnyText,
});

export const receiveUser = userText => ({
  type: RECEIVE_USER,
  userText,
});

export const changeDetails = details => ({
  type: CHANGE_DETAILS,
  details,
});

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error,
});

export const receiveURL = newURL => ({
  type: RECEIVE_URL,
  newURL,
});

export const receiveCID = newCID => ({
  type: RECEIVE_CID,
  newCID,
});
