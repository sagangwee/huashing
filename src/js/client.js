import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Featured from "./pages/Featured";
import Finances from "./pages/Finances";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Treatments from "./pages/Treatments";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}> // root
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="testimonials(/:article)" name="testimonials" component={Testimonials}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
      <Route path="finances" name="finances" component={Finances}></Route>
      <Route path="treatments" name="treatments" component={Treatments}></Route>
      <Route path="about" name="about" component={About}></Route>
    </Route>
  </Router>,
app);
