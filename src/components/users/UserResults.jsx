import { useState, useEffect } from "react";
import { data } from "react-router-dom";

function UserResults() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUsers(data);
  };

  return (
    <div>
      {users.map((user) => (
        <p>{user.login}</p>
      ))}
    </div>
  );
}

export default UserResults;
