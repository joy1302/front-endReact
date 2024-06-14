// src/components/Chat/UserPicker.jsx
import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../utils/api";

const UserPicker = ({ onUserSelect }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAndFilterUsers = async () => {
      const allUsers = await fetchUsers();
      const filteredUsers = allUsers.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setUsers(filteredUsers);
    };

    fetchAndFilterUsers();
  }, [searchTerm]);

  const handleUserSelect = (user) => {
    onUserSelect(`@${user.name}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search users..."
      />
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserSelect(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPicker;
