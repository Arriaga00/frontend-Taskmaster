import { useEffect, useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [UserPersistence, setUserPersistence] = useState([]);
  const [Folders, setFolders] = useState([]);
  const [Tasks, setTasks] = useState([]);
  const [OpenViewTask, setOpenViewTask] = useState([]);
  const [Title, setTitle] = useState("Todas tus tareas");
  const [loading, setLoading] = useState(false);

  //filrado de tareas
  const [filterTask, setFilterTask] = useState([]);
  const [filterState, setFilterState] = useState("");

  // crear tarea
  const [createTask, setCreateTask] = useState({
    id_user: "",
    id_categories: "",
    title: "",
    description: "",
    status: "pending",
    priority: "",
    tags: "",
    due_date: "",
  });

  const PersistenceSession = () => {
    const storage = localStorage.getItem("UserData");
    if (storage) {
      const user = JSON.parse(storage);
      setUserPersistence(user);
    }

    const storageFolders = localStorage.getItem("Folders");
    if (storageFolders) {
      const folders = JSON.parse(storageFolders);
      setFolders(folders);
    }

    const storageTasks = localStorage.getItem("Task");
    if (storageTasks) {
      const tasks = JSON.parse(storageTasks);
      setTasks(tasks);
      setFilterTask(tasks);
    }
  };

  useEffect(() => {
    PersistenceSession();
  }, []);

  console.log(UserPersistence.user);

  return (
    <>
      <Context.Provider
        value={{
          UserPersistence,
          setUserPersistence,
          Folders,
          setFolders,
          Tasks,
          setTasks,
          OpenViewTask,
          setOpenViewTask,
          Title,
          setTitle,
          loading,
          setLoading,
          createTask,
          setCreateTask,
          filterTask,
          setFilterTask,
          filterState,
          setFilterState,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
