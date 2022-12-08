import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Yodlr Home</h1>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Home;
