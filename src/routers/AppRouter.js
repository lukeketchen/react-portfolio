import React from "react";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import NotFoundPage from "../components/NotFoundPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route path="/project/:id" component={EditExpensePage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
