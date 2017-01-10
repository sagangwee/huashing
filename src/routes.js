import React from 'react';
import { Route, IndexRoute } from "react-router";

import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Home from "./pages/Home";
import Finances from "./pages/Finances";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Treatments from "./pages/Treatments";

const routes = (
  <Route path="/" component={Layout}> // root
    <IndexRoute component={Home}></IndexRoute>
    <Route path="testimonials(/:article)" name="testimonials" component={Testimonials}></Route>
    <Route path="contact" name="contact" component={Contact}></Route>
    <Route path="finances" name="finances" component={Finances}></Route>
    <Route path="treatments" name="treatments" component={Treatments}></Route>
    <Route path="about" name="about" component={About}></Route>
  </Route>
);

export default routes;