import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//REDUX
import store from "./store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Cart" exact component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
