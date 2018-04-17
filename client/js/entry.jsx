import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  $.ajax({
    url: '/getInitSessionId',
    method: 'GET',
    success: (data, textStatus, jqXHR) => {
      const store = configureStore();
      ReactDOM.render(<Root store={store} />, document.getElementById('content'));
    }
  });
});
