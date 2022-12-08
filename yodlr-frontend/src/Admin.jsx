import React, { useContext, useState, useEffect } from "react";
import YodlrApi from "./helpers/api";
import UserContext from "./helpers/UserContext";
import User from "./User";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let users = await YodlrApi.getUsers();
      setUsers(users);
    }
    getUsers();
  }, []);

  return (
    <div className="Admin">
      <h1>Admin</h1>
      <ul>
        {users.map((user) => (
          <User
            key={user.id}
            email={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
            state={user.state}
          />
        ))}
      </ul>
    </div>
  );
};

export default Admin;
