import React, { useState, useContext } from "react";
import UserContext from "./helpers/UserContext";
import YodlrApi from "./helpers/api";

const Register = () => {
  const Initial_Value = {
    email: "",
    firstName: "",
    lastName: "",
  };
  const [formData, setFormData] = useState(Initial_Value);

  async function handleSubmit(e) {
    e.preventDefault();
    let user = await YodlrApi.registerUser(formData);
    setFormData(Initial_Value);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
