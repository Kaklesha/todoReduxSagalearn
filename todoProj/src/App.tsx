import React from "react";
import CreateTask from "./components/createTask";
import TaskList from "./components/taskList/TaskList";
const App: React.FC = () => {
  return (
    <div>
      <CreateTask />
      <TaskList />
    </div>
  );
};
export default App;
