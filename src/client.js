import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from './components/AppRoutes';

import style from 'static/stylesheets/main.scss';

const app = document.getElementById('app');

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('app'));
};
