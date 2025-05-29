import React, { useEffect, useState } from "react";

const MainContent = ({ onItemClick }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // mock API
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <h2>User List</h2>
      <ul>
        {items.map((user) => (
          <li key={user.id}>
            <button onClick={() => onItemClick(user)}>{user.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainContent;
