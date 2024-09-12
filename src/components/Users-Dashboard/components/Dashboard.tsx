import React, { useState, useEffect } from "react";
import UsersList from "../components/UsersList";
import SearchBar from "./SearchBar";
import { User } from "../types/User";


const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // console.log("Effect is rendered")
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        // console.log("Error fetching data: ", error);
        setError("Failed to load user data");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>

      {/* SearchBar Component */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* UsersList Component */}
      <UsersList users={filteredUsers} />
    </div>
  );
};

export default Dashboard;
