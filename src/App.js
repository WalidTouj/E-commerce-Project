import React from "react";
import HomePage from "./Pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const HatsPage = () => (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
