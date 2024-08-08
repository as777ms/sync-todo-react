import  { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ email: '', name: '', surname: '', status: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [editTodo, setEditTodo] = useState({ email: '', name: '', surname: '', status: '' });

  const addTodo = () => {
    if (newTodo.email.trim() && newTodo.name.trim() && newTodo.surname.trim() && newTodo.status.trim()) {
      const updatedTodos = [];
      for (let i = 0; i < todos.length; i++) {
        updatedTodos.push(todos[i]);
      }
      updatedTodos.push({
        email: newTodo.email,
        name: newTodo.name,
        surname: newTodo.surname,
        status: newTodo.status
      });
      setTodos(updatedTodos);
      setNewTodo({ email: '', name: '', surname: '', status: '' });
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [];
    for (let i=0; i<todos.length; i++) {
      if (i!==index) {
        updatedTodos.push(todos[i]);
      }
    }
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setEditTodo({
      email: todos[index].email,
      name: todos[index].name,
      surname: todos[index].surname,
      status: todos[index].status
    });
  };

  const updtadeTodo = () => {
    const updatedTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (i === currentIndex) {
        updatedTodos.push({
          email: editTodo.email,
          name: editTodo.name,
          surname: editTodo.surname,
          status: editTodo.status
        });
      } else {
        updatedTodos.push(todos[i]);
      }
    }
    setTodos(updatedTodos);
    setIsEditing(false);
    setEditTodo({ email: '', name: '', surname: '', status: '' });
    setCurrentIndex(null);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={newTodo.email}
          onChange={(e) => {
            const tempTodo = {};
            tempTodo.email = e.target.value;
            tempTodo.name = newTodo.name;
            tempTodo.surname = newTodo.surname;
            tempTodo.status = newTodo.status;
            setNewTodo(tempTodo);
          }}
          placeholder="Email"
        />
        <input
          type="text"
          value={newTodo.name}
          onChange={(e) => {
            const tempTodo = {};
            tempTodo.email = newTodo.email;
            tempTodo.name = e.target.value;
            tempTodo.surname = newTodo.surname;
            tempTodo.status = newTodo.status;
            setNewTodo(tempTodo);
          }}
          placeholder="Name"
        />
        <input
          type="text"
          value={newTodo.surname}
          onChange={(e) => {
            const tempTodo = {};
            tempTodo.email = newTodo.email;
            tempTodo.name = newTodo.name;
            tempTodo.surname = e.target.value;
            tempTodo.status = newTodo.status;
            setNewTodo(tempTodo);
          }}
          placeholder="Surname"
        />
        <input
          type="text"
          value={newTodo.status}
          onChange={(e) => {
            const tempTodo = {};
            tempTodo.email = newTodo.email;
            tempTodo.name = newTodo.name;
            tempTodo.surname = newTodo.surname;
            tempTodo.status = e.target.value;
            setNewTodo(tempTodo);
          }}
          placeholder="Status"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {isEditing && (
        <div className="input-group">
          <input
            type="text"
            value={editTodo.email}
            onChange={(e) => {
              const tempTodo = {};
              tempTodo.email = e.target.value;
              tempTodo.name = editTodo.name;
              tempTodo.surname = editTodo.surname;
              tempTodo.status = editTodo.status;
              setEditTodo(tempTodo);
            }}
            placeholder="Email"
          />
          <input
            type="text"
            value={editTodo.name}
            onChange={(e) => {
              const tempTodo = {};
              tempTodo.email = editTodo.email;
              tempTodo.name = e.target.value;
              tempTodo.surname = editTodo.surname;
              tempTodo.status = editTodo.status;
              setEditTodo(tempTodo);
            }}
            placeholder="Name"
          />
          <input
            type="text"
            value={editTodo.surname}
            onChange={(e) => {
              const tempTodo = {};
              tempTodo.email = editTodo.email;
              tempTodo.name = editTodo.name;
              tempTodo.surname = e.target.value;
              tempTodo.status = editTodo.status;
              setEditTodo(tempTodo);
            }}
            placeholder="Surname"
          />
          <input
            type="text"
            value={editTodo.status}
            onChange={(e) => {
              const tempTodo = {};
              tempTodo.email = editTodo.email;
              tempTodo.name = editTodo.name;
              tempTodo.surname = editTodo.surname;
              tempTodo.status = e.target.value;
              setEditTodo(tempTodo);
            }}
            placeholder="Status"
          />
          <button onClick={updtadeTodo}>Update</button>
        </div>
      )}

      <table className="todo-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.email}</td>
              <td>{todo.name}</td>
              <td>{todo.surname}</td>
              <td>{todo.status}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEditTodo(index)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;