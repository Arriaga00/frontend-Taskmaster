import { useForm } from "react-hook-form";
import { SvgDeletet } from "./svg";
import { LoadingOutlined } from "@ant-design/icons";

const ModalEdit = ({ text, name, closeModal, funcionEdit, loading, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-full ">
        <div className="relative flex  items-center mb-2 p-3  border border-[#242424] rounded-lg shadow-lg backdrop-blur-sm bg-black w-96 flex-col  py-6">
          <h3 className="text-[#7A7A7A] font-semibold">
            {text}
            <span className="font-bold text-blue-500">{name}</span>
          </h3>

          <form onSubmit={handleSubmit(funcionEdit)}>
            <input
              placeholder="Nombre"
              type="text"
              name="name"
              id="name"
              className="w-full  bg-transparent text-[#7A7A7A]  font-bold p-2 focus:outline-0 border-b-2 border-[#242424] mb-4 text-center"
              {...register("name", {
                required: true,
                minLength: {
                  value: 5,
                  message: "El nombre debe tener entre 5 y 40 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "El nombre debe tener entre 5 y 40 caracteres",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500  text-[.8rem] font-semibold">
                {errors.name.message}
              </p>
            )}
            {user && (
              <input
                type="text"
                placeholder="Contraseña"
                className="w-full  bg-transparent text-[#7A7A7A]  font-bold p-2 focus:outline-0 border-b-2 border-[#242424] mb-4 text-center"
                {...register("password")}
              />
            )}
            {errors.password && (
              <p className="text-red-500  text-[.8rem] font-semibold">
                {errors.password.message}
              </p>
            )}
            {user && (
              <input
                type="email"
                placeholder="email"
                className="w-full  bg-transparent text-[#7A7A7A]  font-bold p-2 focus:outline-0 border-b-2 border-[#242424] mb-4 text-center"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 5,
                    message: "El email debe tener entre 5 y 20 caracteres",
                  },
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Ingresa un correo electrónico válido",
                  },
                })}
              />
            )}
            <button className="w-full bg-blue-500 bg-opacity-10 text-blue-500 px-2 py-2 rounded-md  hover:bg-blue-500 hover:bg-opacity-30 ease-out duration-300 font-bold">
              Editar {loading && <LoadingOutlined />}
            </button>
          </form>
          <p
            className="absolute top-1 right-1  font-semibold text-sm cursor-pointer "
            onClick={() => closeModal(false)}
          >
            <SvgDeletet />
          </p>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
