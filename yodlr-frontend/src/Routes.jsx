import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import YodlrApi from "./helpers/api";
import Admin from "./Admin";
import Users from "./User";
import Navbar from "./Navbar";
import Register from "./Register";
import Home from "./Home";

// function Routes() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route exact path="/register">
//         <Register />
//       </Route>
//       <Route exact path="/admin">
//         <Admin />
//       </Route>
//       <Route exact path="/users">
//         <Users />
//       </Route>
//     </BrowserRouter>
//   );
// }

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
    </BrowserRouter>
  );
};

export default Routes;
