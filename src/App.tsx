import { useState } from "react";
import "./App.css";
import { CounterClosures } from "./tasks/counterClosures";
import { FunctionComposition } from "./tasks/functionComposition";
import { Sleep } from "./tasks/sleep";

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState<
    "counterClosures" | "functionComposition" | "sleep"
  >("counterClosures");

  const renderSelectedTaskComponent = () => {
    switch (selectedTaskId) {
      case "sleep":
        return <Sleep />;
      case "functionComposition":
        return <FunctionComposition />;
      case "counterClosures":
      default:
        return <CounterClosures />;
    }
  };

  return (
    <>
      <h2>Select:</h2>
      <p>
        <button onClick={() => setSelectedTaskId("counterClosures")}>
          Counter (closures)
        </button>
      </p>
      <p>
        <button onClick={() => setSelectedTaskId("functionComposition")}>
          Function Composition
        </button>
      </p>
      <p>
        <button onClick={() => setSelectedTaskId("sleep")}>Sleep</button>
      </p>
      <div className="task-container">{renderSelectedTaskComponent()}</div>
    </>
  );
}

export default App;
