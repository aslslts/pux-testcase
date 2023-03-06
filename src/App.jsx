import { useState } from "react";
import "./App.css";
import Actions from "./components/Actions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyTasks from "./components/MyTasks";
import Sidebar from "./components/Sidebar";
import TaskDetails from "./components/TaskDetails";
import Tasks from "./components/Tasks";
import TaskStatusNormal from "./assets/task-icons/task-status-normal.svg";
import TaskStatusAcil from "./assets/task-icons/task-status-acil.svg";
import TaskStatusCokAcil from "./assets/task-icons/task-status-cok-acil.svg";
import UserImage from "./assets/icons/avatar.svg";

const TaskData = [
  {
    projectName: "Koçtaş UI&UX Maintenance",
    taskName: "Anasayfada ara çözümler",
    categoryName: "UX&UI",
    tagName: "Etiket-1,Etiket-2, Etiket-3, Etiket-4",
    date: "22 Mayıs Çar.-23 Ocak Perş.",
    priority: TaskStatusAcil,
    progressValue: "adasfa",
    userImage: UserImage,
  },
  {
    projectName: "Ford UI&UX Maintenance",
    taskName: "Wireframe",
    categoryName: "UX&UI",
    tagName: "Etiket-1,Etiket-2, Etiket-3, Etiket-4",
    date: "22 Mayıs Çar.-23 Ocak Perş.",
    priority: TaskStatusNormal,
    progressValue: "adasfa",
    userImage: UserImage,
  },
  {
    projectName: "AI Proje/ AR-GE",
    taskName: "Toplantı Eforları",
    categoryName: "Toplantılar",
    tagName: "Etiket-1,Etiket-2, Etiket-3, Etiket-4",
    date: "22 Mayıs Çar.-23 Ocak Perş.",
    priority: TaskStatusCokAcil,
    progressValue: "adasfa",
    userImage: UserImage,
  },
];

function App() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="app">
      <div>
        <Sidebar />
      </div>
      <div className="main">
        <Header />
        <MyTasks />
        <Actions />
        <Tasks
          data={TaskData}
          setDetailsOpen={setDetailsOpen}
          detailsOpen={detailsOpen}
        />
      </div>
      <div className={`overlay ${detailsOpen && "overlay-active"}`}></div>
      {detailsOpen && (
        <TaskDetails
          setDetailsOpen={setDetailsOpen}
          detailsOpen={detailsOpen}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
