import { FC } from "react";
import { TodoList } from "./components/Todo";
import "./styles.css";

const App: FC = () => {
  return (
    <div className="example-container">
      <h1>TypeScript Todo App</h1>
      <TodoList />
    </div>
  );
};

export default App;
