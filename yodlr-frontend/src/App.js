import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import YodlrApi from "./helpers/api";
import User from "./User";
import Navbar from "./Navbar";
import Admin from "./Admin";
import Register from "./Register";
import Home from "./Home";

function App() {
  <div className="App">
    <Navbar />
    <Home />
    <User />
    <Admin />
    <Register />
    <Routes />
  </div>;
}

export default App;
