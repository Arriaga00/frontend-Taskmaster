import { useContext } from "react";
import Context from "../../context/Context";

const ModalDelete = ({ name, id }) => {
  const { setModalDelete, modalDelete } = useContext(Context);
  return (
    <>
      {modalDelete ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-full">
          <div className="flex  items-center mb-2 p-3  border border-[#242424] rounded-lg shadow-lg backdrop-blur-sm bg-black w-96 flex-col">
            <p>
              Para eliminar la tarea debes escribir{" "}
              <span className="text-red-500 font-bold">{name}</span>
            </p>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full  bg-transparent text-[#7A7A7A]  font-bold p-2 focus:outline-0 border-b-2 border-[#242424] mb-4 text-center"
            />
            <button
              onClick={() => setModalDelete(false)}
              className="w-full bg-red-500 bg-opacity-10 text-red-500 px-2 py-2 rounded-md  hover:bg-red-500 hover:bg-opacity-40 ease-out duration-300 font-bold"
            >
              Eliminar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalDelete;
