import React from "react";
import { UsersListProps } from "../types/User";

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <table className="dashboard-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{`${user.address.street}, ${user.address.city}`}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UsersList;
