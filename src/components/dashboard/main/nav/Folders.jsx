import { useContext, useState } from "react";
import CreateCategory from "./CreateCategory";
import Context from "../../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { SvgDeletet } from "../../../global/svg";
import ModalDelete from "../../../global/ModalDelete";

const Folders = () => {
  const {
    Folders,
    setTitle,
    setCreateTask,
    createTask,
    UserPersistence,
    setFilterTask,
    Tasks,
  } = useContext(Context);

  const [openModal, setOpenModal] = useState(false);
  const [infoModal, setInfoModal] = useState({
    name: "",
    id: "",
  });

  if (!Folders) {
    <LoadingOutlined />;
  }

  if (UserPersistence) {
    <LoadingOutlined />;
  }

  const id = UserPersistence && UserPersistence.user && UserPersistence.user.id;

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
              className="group flex items-center justify-between rounded-lg px-4 py-2 text-[#7a7a7a] hover:bg-gray-100 hover:text-[#242424] dark:text-[#7a7a7a] dark:hover:bg-[#242424] dark:hover:text-gray-200 cursor-pointer"
            >
              <span className="text-sm font-bold"> {folder.name} </span>

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
                          console.table(category.id);
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
          id={infoModal.id}
          close={setOpenModal}
          textConfirm={
            "Se eliminará la categoría y todos los elementos asociados, escribe "
          }
        />
      )}
    </>
  );
};

export default Folders;
