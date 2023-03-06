import "./App.css";
import Actions from "./components/Actions";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
