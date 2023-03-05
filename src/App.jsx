import "./App.css";
import Actions from "./components/Actions";
import Header from "./components/Header";
import MyTasks from "./components/MyTasks";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="app">
      <div>
        <Sidebar />
      </div>
      <div className="main">
        <Header />
        <MyTasks />
        <Actions />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
