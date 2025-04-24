import React, { useState, useReducer } from "react";

// Basic State Management with useState
interface CounterState {
  count: number;
  lastUpdated: Date;
}

export const Counter: React.FC = () => {
  const [state, setState] = useState<CounterState>({
    count: 0,
    lastUpdated: new Date(),
  });

  const increment = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
      lastUpdated: new Date(),
    }));
  };

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <p>Last updated: {state.lastUpdated.toLocaleTimeString()}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Complex State Management with useReducer
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoState = Todo[];

type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export const TodoList: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", text: newTodo });
      setNewTodo("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
