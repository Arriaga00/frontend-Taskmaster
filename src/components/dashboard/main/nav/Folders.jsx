import { useContext, useState } from "react";
import CreateCategory from "./CreateCategory";
import Context from "../../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { SvgDeletet, SvgIconDelete, SvgIconEdit } from "../../../global/svg";
import ModalDelete from "../../../global/ModalDelete";
import ModalEdit from "../../../global/ModalEdit";

const Folders = () => {
  const {
    Folders,
    setTitle,
    setCreateTask,
    createTask,
    UserPersistence,
    setFilterTask,
    Tasks,
    setTasks,
    setFolders,
  } = useContext(Context);

  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [infoModalEdit, setInfoModalEdit] = useState({
    name: "",
    id: "",
  });
  const [infoModal, setInfoModal] = useState({
    name: "",
    id: "",
  });
  const [infoModalDelete, setInfoModalDelete] = useState({
    name: "",
    id: "",
  });
  const [folderId, setFolderId] = useState(0);

  if (!Folders) {
    <LoadingOutlined />;
  }

  if (UserPersistence) {
    <LoadingOutlined />;
  }

  const id =
    UserPersistence && UserPersistence.user && UserPersistence.user.id
      ? UserPersistence.user.id
      : undefined;

  const handleChange = (categoryId) => {
    setCreateTask({
      ...createTask,
      id_user: id,
      id_categories: categoryId,
    });
  };
  const filterForCategory = (categoryId) => {
    const filterForID = Tasks.filter(
      (task) => task.id_categories === categoryId
    );
    setFilterTask(filterForID);
  };

  const deleteCategory = (category) => {
    setOpenModal(true);
    setInfoModal({
      name: category.name,
      id: category.id,
    });
  };

  const funcionDelete = (data) => {
    if (data.name === infoModal.name) {
      console.log(true);
      setLoading(true);
      fetch(
        `https://api-taskmaster.up.railway.app/api/categories/delete-category/${infoModal.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      )
        .then((response) => response.json())
        .then(() => {
          fetch(
            `https://api-taskmaster.up.railway.app/api/folders/get-folders/${id}`
          )
            .then((response) => response.json())
            .then((data) => {
              setFolders(data);
              window.localStorage.setItem("Folders", JSON.stringify(data));
              //   message.success("se cargado correctamente las carpetas");
              // console.log(data);
              fetch(
                `https://api-taskmaster.up.railway.app/api/tasks/consult-tasks/${id}`
              )
                .then((response) => response.json())
                .then((data) => {
                  setTasks(data);
                  setFilterTask(data);
                  window.localStorage.setItem("Task", JSON.stringify(data));
                  window.localStorage.setItem(
                    "filterTask",
                    JSON.stringify(data)
                  );
                  //   message.success("se cargado correctamente las tareras");
                  // console.log(data);
                });
            });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
          setOpenModal(false);
        });
    }
  };

  const deleteFolder = (folder) => {
    setOpenModalDelete(true);
    setInfoModalDelete({
      name: folder.name,
      id: folder.id,
    });
  };

  const funcionDeleteDeleteFolder = (data) => {
    console.log(data, infoModalDelete.id);
    if (data.name === infoModalDelete.name) {
      fetch(
        `https://api-taskmaster.up.railway.app/api/folders/delete-folder/${infoModalDelete.id}`,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then(() => {
          fetch(
            `https://api-taskmaster.up.railway.app/api/folders/get-folders/${id}`
          )
            .then((response) => response.json())
            .then((data) => {
              setFolders(data);
              window.localStorage.setItem("Folders", JSON.stringify(data));
              fetch(
                `https://api-taskmaster.up.railway.app/api/tasks/consult-tasks/${id}`
              )
                .then((response) => response.json())
                .then((data) => {
                  setTasks(data);
                  setFilterTask(data);
                  window.localStorage.setItem("Task", JSON.stringify(data));
                  window.localStorage.setItem(
                    "filterTask",
                    JSON.stringify(data)
                  );
                });
            });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
          setOpenModalDelete(false);
        });
    }
  };

  const editFolderNamee = (folder) => {
    console.log(folder);
    setInfoModalEdit({ name: folder.name, id: folder.id });
  };

  const funcionEditFolderNamee = (data) => {
    setLoading(true);
    fetch("https://api-taskmaster.up.railway.app/api/folders/update-folder", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: folderId,
        name: data.name,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        fetch(
          `https://api-taskmaster.up.railway.app/api/folders/get-folders/${id}`
        )
          .then((response) => response.json())
          .then((data) => {
            setFolders(data);
            window.localStorage.setItem("Folders", JSON.stringify(data));
          });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setOpenModalEdit(false);
      });
  };

  return (
    <>
      {Folders.map((folder, index) => {
        const nameFolder = folder.name;
        return (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden mt-3 w-full ease-out duration-300"
          >
            <summary
              onClick={() => setTitle(nameFolder)}
              className="group flex items-center justify-between rounded-lg px-4 py-2 text-[#7a7a7a] hover:bg-gray-100 hover:text-[#242424] dark:text-[#7a7a7a] dark:hover:bg-[#242424] dark:hover:text-gray-200 cursor-pointer relative folderHover"
            >
              <span className="text-sm font-bold"> {folder.name} </span>

              <div
                className=" flex items-center justify-center absolute -right-16 -bottom-5 font-extrabold py-1  w-20   z-50 rounded-md px-2  backdrop-blur-xl bg-white/10 menuHover "
                style={{}}
              >
                <p
                  className="hover:scale-105 transition duration-200 w-[50%]"
                  onClick={() => deleteFolder(folder)}
                >
                  <SvgIconDelete size={6} />
                </p>
                <p
                  className="hover:scale-105 transition duration-200 w-[50%] text-center "
                  onClick={() => {
                    editFolderNamee(folder),
                      setOpenModalEdit(true),
                      setFolderId(folder.id);
                  }}
                >
                  <SvgIconEdit size={6} />
                </p>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4 ease-out duration-300">
              <li>
                <CreateCategory folder={folder} />
              </li>

              {folder.categories.map((category, index) => {
                return (
                  <div key={index}>
                    <li>
                      <NavLink
                        onClick={() => {
                          handleChange(category.id);
                          setTitle(`${nameFolder}/${category.name}`);
                          filterForCategory(category.id);
                        }}
                        className={
                          "block rounded-lg px-4 py-1 text-sm  hover:bg-gray-100  dark:text-[#7a7a7a] dark:hover:bg-[#242424] dark:hover:text-gray-200 cursor-pointer relative category"
                        }
                      >
                        {category.name}

                        <p
                          onClick={() => {
                            deleteCategory(category);
                          }}
                          className="absolute -right-8 -bottom-2 font-extrabold svg-hover p-2"
                        >
                          <SvgDeletet />
                        </p>
                      </NavLink>
                    </li>
                  </div>
                );
              })}
            </ul>
          </details>
        );
      })}
      {openModal && (
        <ModalDelete
          name={infoModal.name}
          closes={setOpenModal}
          fetchs={funcionDelete}
          setLoading={setLoading}
          loading={loading}
          textConfirm={
            "Se eliminará la categoría y todos los elementos asociados, escribe "
          }
        />
      )}
      {openModalDelete && (
        <ModalDelete
          name={infoModalDelete.name}
          closes={setOpenModalDelete}
          fetchs={funcionDeleteDeleteFolder}
          setLoading={setLoading}
          loading={loading}
          textConfirm={
            "Se eliminará la carpeta y todos los elementos asociados, escribe "
          }
        />
      )}
      {openModalEdit && (
        <ModalEdit
          name={infoModalEdit.name}
          closeModal={setOpenModalEdit}
          loading={loading}
          funcionEdit={funcionEditFolderNamee}
          user={false}
        />
      )}
    </>
  );
};

export default Folders;
