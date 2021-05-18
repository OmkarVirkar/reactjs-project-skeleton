import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app';

const rootEl = document.getElementById('app');

// Define the Instructor Assignment Page routes for laod assignment details.
const router = (
  <BrowserRouter>
    <Route path="/assignment-instructor.html" component={App} />
  </BrowserRouter>
);
ReactDOM.render(router, rootEl);

if (module.hot) {
  module.hot.accept();
}
