import { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Llamada al backend
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.users);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {users.map((user, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            width: "250px",
          }}>
            <img src={user.photoUrl} alt={user.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h2>{user.name}</h2>
            <p><strong>Edad:</strong> {user.age}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Dirección:</strong> {user.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
