import React, { useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const newTask: Todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (todo: Todo) => {
    if (!todo.completed) {
      setEditingId(todo.id);
      setEditText(todo.text);
    }
  };

  const saveEdit = (id: number) => {
    if (editText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editText.trim() } : todo
        )
      );
      setEditingId(null);
      setEditText("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const clearNewTodo = () => {
    setNewTodo("");
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderEmptyState = () => {
    if (todos.length === 0) {
      return (
        <div className="empty-state">
          <p>No tasks yet. Add your first task above!</p>
        </div>
      );
    }
    if (searchQuery && filteredTodos.length === 0) {
      return (
        <div className="empty-state">
          <p>No tasks found matching "{searchQuery}"</p>
          <button onClick={clearSearch} className="clear-search-button">
            Clear Search
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="input-with-clear">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button onClick={clearSearch} className="clear-button">
              ×
            </button>
          )}
        </div>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="add-todo-form">
        <div className="input-with-clear">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
          />
          {newTodo && (
            <button
              type="button"
              onClick={clearNewTodo}
              className="clear-button"
            >
              ×
            </button>
          )}
        </div>
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>

      {/* Empty State or Todo List */}
      {renderEmptyState() || (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              {editingId === todo.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="save-button"
                  >
                    Save
                  </button>
                  <button onClick={cancelEdit} className="cancel-button">
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                      className="todo-checkbox"
                    />
                    <span className="todo-text">{todo.text}</span>
                  </div>
                  <div className="todo-actions">
                    <button
                      onClick={() => startEditing(todo)}
                      className={`edit-button ${
                        todo.completed ? "disabled" : ""
                      }`}
                      disabled={todo.completed}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
