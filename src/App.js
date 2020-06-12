import React from "react";
import Navbar from './components/Navbar'
import Home from './components/Home'
import "./App.css";
//REDUX
import store from './store'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store} >
    <div className="App">
     <Navbar/>
     <Home/>
    </div>
    </Provider>
  );
}

export default App;
