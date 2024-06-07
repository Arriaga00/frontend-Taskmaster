import { useForm } from "react-hook-form";
import { SvgDeletet } from "./svg";
import { useContext, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import Context from "../../context/Context";

const ModalDelete = ({ name, id, close, textConfirm }) => {
  const { UserPersistence, setFolders, setTasks, setFilterTask } =
    useContext(Context);
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  if (!UserPersistence) {
    return <LoadingOutlined />;
  }

  const idUser =
    UserPersistence.user && UserPersistence.user.id
      ? UserPersistence.user.id
      : undefined;

  const handleDelete = (data) => {
    setLoading(true);
    if (data.name === name) {
      fetch(`http://localhost:3000/api/categories/delete-category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((response) => response.json())
        .then(() => {
          fetch(`http://localhost:3000/api/folders/get-folders/${idUser}`)
            .then((response) => response.json())
            .then((data) => {
              setFolders(data);
              window.localStorage.setItem("Folders", JSON.stringify(data));
              //   message.success("se cargado correctamente las carpetas");
              // console.log(data);
              fetch(`http://localhost:3000/api/tasks/consult-tasks/${idUser}`)
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
          close(false);
        });
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-full">
        <div className="flex  items-center mb-2 p-3  border border-[#242424] rounded-lg shadow-lg backdrop-blur-sm bg-black w-96 flex-col relative py-6">
          <p className=" text-[#7A7A7A] font-semibold">
            {textConfirm}
            <span className="text-red-500 font-bold text-opacity-80">
              {name}
            </span>{" "}
            para eliminar
          </p>
          <form onSubmit={handleSubmit(handleDelete)}>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full  bg-transparent text-[#7A7A7A]  font-bold p-2 focus:outline-0 border-b-2 border-[#242424] mb-4 text-center"
              {...register("name", {
                required: true,
              })}
            />
            <button className="w-full bg-red-500 bg-opacity-10 text-red-500 px-2 py-2 rounded-md  hover:bg-red-500 hover:bg-opacity-30 ease-out duration-300 font-bold">
              Eliminar
              {loading && <LoadingOutlined />}
            </button>
          </form>
          <p
            className="absolute top-1 right-1 text-[#7A7A7A] font-semibold text-sm cursor-pointer"
            onClick={() => close(false)}
          >
            <SvgDeletet />
          </p>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
