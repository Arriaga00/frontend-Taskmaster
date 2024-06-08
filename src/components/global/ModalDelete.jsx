import { useForm } from "react-hook-form";
import { SvgDeletet } from "./svg";
import { LoadingOutlined } from "@ant-design/icons";

const ModalDelete = ({ name, textConfirm, fetchs, loading, closes }) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-full">
        <div className="flex  items-center mb-2 p-3  border border-[#242424] rounded-lg shadow-lg backdrop-blur-sm bg-black w-96 flex-col relative py-6">
          <p className=" text-[#7A7A7A] font-semibold">
            {textConfirm}
            <span className="text-blue-500 font-bold text-opacity-80">
              {name}
            </span>{" "}
            para eliminar
          </p>
          <form onSubmit={handleSubmit(fetchs)}>
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
            onClick={() => closes(false)}
          >
            <SvgDeletet />
          </p>
        </div>
      </section>
    </>
  );
};

export default ModalDelete;
