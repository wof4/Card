import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CardPage from "./pages/CardPage";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/card" component={CardPage} />
      <Route path="/" render={() => <Redirect to="/card" />} />
    </Switch>
  </BrowserRouter>
);

export default App;
