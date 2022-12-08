import React, { useEffect, useState } from "react";
import YodlrApi from "./helpers/api";

function User() {
  const [user, setUser] = useState(null);
  const id = window.location.pathname.split("/")[2];
  const memoryRouter = window.location.pathname.split("/")[1];

  useEffect(() => {
    async function getUser() {
      let user = await YodlrApi.getUser(id);
      setUser(user);
    }
    getUser();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  async function handleDelete(evt) {
    evt.preventDefault();
    await YodlrApi.deleteUser(id);
    if (memoryRouter === "admin") {
      window.location.href = "/admin";
    }
  }

  return (
    <div className="User">
      <h1>User info:</h1>
      <p>Email: {user.email}</p>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>State: {user.state}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

// const User = ({ email, firstName, lastName, state }) => {
//   return (
//     <div className="User">
//       <li>
//         Email: {email}
//         First name: {firstName}
//         Last name: {lastName}
//         State: {state}
//       </li>
//     </div>
//   );
// };

export default User;
