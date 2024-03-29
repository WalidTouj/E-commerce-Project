import React from "react";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./component/Header/Header.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
