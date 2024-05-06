import { useState } from "react";
import "./App.css";
import { RemoveNodesFromLinkedList } from "./tasks/removeNodesFromLinkedList";

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState<
    "removeNodesFromLinkedList" | ""
  >("");

  const renderSelectedTaskComponent = () => {
    switch (selectedTaskId) {
      case "removeNodesFromLinkedList":
        return <RemoveNodesFromLinkedList />;
      default:
        return <>No tasks selected</>;
    }
  };

  return (
    <>
      <h2>Select:</h2>
      <div>
        <button onClick={() => setSelectedTaskId("removeNodesFromLinkedList")}>
          Remove Nodes from Linked List
        </button>
      </div>
      <div className="task-container">{renderSelectedTaskComponent()}</div>
    </>
  );
}

export default App;
