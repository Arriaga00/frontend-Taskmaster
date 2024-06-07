import { useContext, useState } from "react";
import {} from "../../../../fetch/getAndPostHome";
import Context from "../../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";

const CreateCategory = ({ folder }) => {
  const { setFolders, setTasks, setFilterTask, UserPersistence } =
    useContext(Context);
  const [inputPlaceholder, setInputPlaceholder] =
    useState("crea una categoria");

  const [sendCreateFolder, setSendCreateFolder] = useState({
    id: folder.id,
    name: "",
  });

  const captureCreateCategory = (e) => {
    setSendCreateFolder({
      id: folder.id,
      name: e.target.value,
    });
  };
  if (!UserPersistence) {
    return <LoadingOutlined />;
  }

  const idUser =
    UserPersistence.user && UserPersistence.user.id
      ? UserPersistence.user.id
      : undefined;

  const createCategories = () => {
    setInputPlaceholder("crea una categoria");
    if (sendCreateFolder.name === "") return;
    fetch("http://localhost:3000/api/categories/save-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendCreateFolder),
    })
      .then((res) => res.json())
      .then(() => {
        fetch(`http://localhost:3000/api/folders/get-folders/${idUser}`)
          .then((response) => response.json())
          .then((data) => {
            setFolders(data);
            window.localStorage.setItem("Folders", JSON.stringify(data));
            // message.success("se cargado correctamente las carpetas");
            // console.log(data);
            fetch(`http://localhost:3000/api/tasks/consult-tasks/${idUser}`)
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
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSendCreateFolder({
          id: folder.id,
          name: "",
        });
      });
  };

  return (
    <>
      <label className="w-full flex items-center justify-center rounded-lg py-1 text-sm border-dotted border-2 border-[#242424] px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-[#7a7a7a] dark:hover:bg-[#242424] dark:hover:text-gray-200 mt-3">
        <input
          className="text-[.7rem] focus:outline-0 bg-transparent placeholder:text-center text-center w-full"
          placeholder={inputPlaceholder}
          onFocus={() => setInputPlaceholder("")}
          onBlur={createCategories}
          onChange={captureCreateCategory}
        />
      </label>
    </>
  );
};

export default CreateCategory;
