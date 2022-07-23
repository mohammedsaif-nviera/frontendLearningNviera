import "./App.css";
import NewTask from "./Components/NewTask";
import Tasks from "./Components/Tasks";
import Welcome from "./Components/Welcome";
import TaskList from "./pages/task/TaskList";

function App() {
  return (
    <div className="outerBody">
      <Welcome />
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
