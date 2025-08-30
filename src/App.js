import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => { fetchUsers(); }, []);

  const fetchUsers = () => {
    axios.get("https://mern-7h5m.onrender.com/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`https://mern-7h5m.onrender.com/api/users/${editId}`, { name, email });
        setEditId(null);
      } else {
        await axios.post("https://mern-7h5m.onrender.com/api/users", { name, email });
      }
      setName("");
      setEmail("");
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://mern-7h5m.onrender.com/api/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">MERN App</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-4">{editId ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {editId ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user._id} className="p-2 border-b last:border-none flex justify-between items-center">
              <span>{user.name} ({user.email})</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="px-2 py-1 bg-yellow-400 rounded text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="px-2 py-1 bg-red-500 rounded text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
