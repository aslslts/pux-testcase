import "./App.css";
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
        <Tasks />
      </div>
    </div>
  );
}

export default App;
