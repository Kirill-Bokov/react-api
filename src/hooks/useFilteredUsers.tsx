import { useState, useEffect } from "react";
import User from "../interfaces/User";

export const useFilteredUsers = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Ошибка загрузки", err));
  }, []);

  const filteredUsers = filter === ""
    ? users
    : users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()));

  return { filter, setFilter, filteredUsers };
};
