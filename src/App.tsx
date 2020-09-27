import * as React from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/UI/Layout";

import Calculation from "./screens/Calculation";
import History from "./screens/History";
const App = () => (
  <HashRouter>
    <Layout>
      <Route exact path="/" component={Calculation} />
      <Route exact path="/history" component={History} />
    </Layout>
  </HashRouter>
);

export default hot(module)(App);
