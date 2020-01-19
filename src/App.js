import React from "react";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, SignUp } from "./routes";
import "./App.css";

function App() {
  return (
    <Router className="App">
      <span>Livre D'or</span>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
          <Link to="/">Home</Link>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
