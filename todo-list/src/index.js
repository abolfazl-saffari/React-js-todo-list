import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import NotFound from "./components/NotFound";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/add-todo" component={AddTodo} />
      <Route exact path="/" component={App} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
