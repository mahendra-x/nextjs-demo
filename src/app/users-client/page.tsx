"use client"
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserClient: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState ("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError("error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading users...</div>}
      {error && <div>Error: {error}</div>}
      {users.length > 0 && (
        <ul className="space-y-4 p-4">
          {users.map((user) => (
            <li 
                key={user.id}
                className="p-4 bg-white shadow-md rounded-lg text-gray-700" 
            >
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserClient;