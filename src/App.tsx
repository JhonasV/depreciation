import * as React from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/UI/Layout";
import Home from "./screens/Home";
import Calculation from "./screens/Calculation";
import History from "./screens/History";
const App = () => (
  <HashRouter>
    <Layout>
      <Route default={Home} exact path="/" component={Home} />
      <Route exact path="/calculation" component={Calculation} />
      <Route exact path="/history" component={History} />
    </Layout>
  </HashRouter>
);

export default hot(module)(App);
