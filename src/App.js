import "./App.css";
import NumberGenerator from "./RendomNumberGenrator/NumberGenerator";

import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaries from "./RendomNumberGenrator/ErrorBoundaries";
import RandomNumberGenerator from "./FumctionalCompNumGenerator/RandomNumberGenerator";
import FunErrorBoundary from "./FumctionalCompNumGenerator/FunErrorBoundary";
function App() {
  return (
    <div className="App">
      <h1>Task1: Error Boundary using Class Component </h1>
      <ErrorBoundaries>
        <NumberGenerator />
      </ErrorBoundaries>
      <hr/>
      <h1>Task2: Error Boundary using Functional Component</h1>
      <ErrorBoundary FallbackComponent={FunErrorBoundary}>
        <RandomNumberGenerator />
      </ErrorBoundary>
    </div>
  );
}

export default App;
