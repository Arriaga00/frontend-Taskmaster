import { useContext, useState } from "react";
import { SvgIconFolder } from "../../../global/svg";
import Context from "../../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";
import { GET_FOLDERS } from "../../../../fetch/getAndPostHome";

const CreateFolder = () => {
  const { UserPersistence, setFolders, setTasks, setFilterTask } =
    useContext(Context);
  const [inputPlaceholder, setInputPlaceholder] = useState("crea una carpeta");
  const [sendCreateFolder, setSendCreateFolder] = useState({
    id: "",
    name: "",
  });

  if (!UserPersistence) {
    return <LoadingOutlined />;
  }

  const User =
    UserPersistence && UserPersistence.user ? UserPersistence.user.id : null;

  const captureCreateFolders = (e) => {
    setSendCreateFolder({
      id: User,
      name: e.target.value,
    });
  };

  const createFolder = () => {
    setInputPlaceholder("crea una carpeta");
    if (sendCreateFolder.name === "") return;
    fetch("http://localhost:3000/api/folders/save-folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendCreateFolder),
    })
      .then((res) => res.json())
      .then(() => {
        fetch(`http://localhost:3000/api/folders/get-folders/${User}`)
          .then((response) => response.json())
          .then((data) => {
            setFolders(data);
            window.localStorage.setItem("Folders", JSON.stringify(data));
            // message.success("se cargado correctamente las carpetas");
            // console.log(data);
            fetch(`http://localhost:3000/api/tasks/consult-tasks/${User}`)
              .then((response) => response.json())
              .then((data) => {
                setTasks(data);
                setFilterTask(data);
                window.localStorage.setItem("Task", JSON.stringify(data));
                window.localStorage.setItem("filterTask", JSON.stringify(data));
                // message.success("se cargado correctamente las tareras");
                // console.log(data);
              });
          });
      });
    setTimeout(() => {
      GET_FOLDERS(User, setFolders);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }, 1300);
  };

  return (
    <>
      <label
        className="w-full cursor-pointer flex items-center justify-center rounded-lg  py-1 text-sm  border-dotted border-2 border-[#242424] px-1 text-[#7a7a7a] hover:bg-gray-100 hover:text-gray-700 dark:text-[#7a7a7a] dark:hover:bg-[#242424] dark:hover:text-gray-200 mt-3"
        href="#"
      >
        <SvgIconFolder />
        <input
          type="text"
          className="focus:outline-0 bg-transparent placeholder:text-center text-center w-full"
          placeholder={inputPlaceholder}
          onFocus={() => setInputPlaceholder("")}
          onBlur={createFolder}
          onChange={captureCreateFolders}
        />
      </label>
    </>
  );
};

export default CreateFolder;
