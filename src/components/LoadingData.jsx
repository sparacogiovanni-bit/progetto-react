import { useState } from "react";

function LoadingData() {
    const [users, setUsers] = useState([]);
    
    async function loadUsers() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
    }
    
    return (
        <div className="loading-data">
        <button onClick={loadUsers}>
        Carica utenti
        </button>
        <ul className="users-list">
        {users.map((user) => (
            <li key={user.id}>
            <h3>
            {user.name}
            </h3>
            <p>
            {user.email}
            </p>
            </li>
        ))}
        </ul>
        </div>
    );
}

export default LoadingData;