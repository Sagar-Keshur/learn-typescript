import { FC } from "react";
import { Example } from "./components/FunctionalComponent";
import "./styles.css";

const App: FC = () => {
  return (
    <div className="example-container">
      <h1>TypeScript React Examples</h1>
      <Example />
    </div>
  );
};

export default App;
