import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { POST_SIGNUP } from "../../../fetch/getAndPostHome";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const registerUser = (data) => {
    POST_SIGNUP(data, setLoading, navigate);
  };

  const validatePasswordMatch = (value) => {
    const { password } = getValues();
    return value === password || "Las contraseñas no coinciden";
  };

  return (
    <>
      <motion.section
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center h-[42rem] w-full mb-28"
      >
        <h1 className="text-4xl font-bold">Ingresa tus datos</h1>
        <form
          onSubmit={handleSubmit(registerUser)}
          className="flex flex-col items-center justify-center w-96 gap-3 mt-10 mb-6"
        >
          <input
            type="text"
            placeholder="Name and surname"
            className="w-full bg-black py-4 px-3 border rounded-md border-[#242424]"
            {...register("names", {
              required: true,
              maxLength: {
                value: 15,
                message:
                  "El nombre y el apellido deben tener entre 2 y 15 caracteres",
              },
              minLength: {
                value: 2,
                message:
                  "El nombre y el apellido deben tener entre 2 y 15 caracteres",
              },
              pattern: {
                value: /^[A-ZÁÉÚÍÓÑa-z áéúíóñ]{2,15}$/,
                message: "Ingresa un nombre válido",
              },
            })}
          />
          {errors.names && (
            <p className="text-red-500  text-[.8rem] font-semibold">
              {errors.names.message}
            </p>
          )}

          <input
            type="email"
            placeholder="@email.com"
            className="w-full bg-black py-4 px-3 border rounded-md border-[#242424]"
            {...register("email", {
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
          {errors.email && (
            <p className="text-red-500  text-[.8rem] font-semibold">
              {errors.email.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black py-4 px-3 border rounded-md border-[#242424]"
            {...register("password", {
              required: true,
              maxLength: {
                value: 10,
                message: "La contraseña debe tener entre 5 y 10 caracteres",
              },
              minLength: {
                value: 5,
                message: "La contraseña debe tener entre 5 y 10 caracteres",
              },
            })}
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="w-full bg-black py-4 px-3 border rounded-md border-[#242424]"
            {...register("confirmPassword", {
              required: true,
              maxLength: {
                value: 10,
                message: "La contraseña debe tener entre 5 y 10 caracteres",
              },
              minLength: {
                value: 5,
                message: "La contraseña debe tener entre 5 y 10 caracteres",
              },
              validate: validatePasswordMatch,
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-[.8rem] font-semibold">
              {errors.confirmPassword.message}
            </p>
          )}
          <button className="bg-black border border-[#242424] w-full font-bold  px-4 py-2 rounded-md text-yellow-500 hover:bg-yellow-100 hover:bg-opacity-10 hover:border-yellow-500 ease-out duration-300">
            Crear usuario{" "}
            {loading ? (
              <LoadingOutlined style={{ fontWeight: "bold" }} />
            ) : null}
          </button>
        </form>
        <p className="flex gap-5 items-center  text-[#707070]">
          Tienes cuenta?{" "}
          <NavLink
            to={"/home/login"}
            className="font-bold underline decoration-2 hover:text-blue-500 cursor-pointer ease-out duration-300"
          >
            Inicia sesión
          </NavLink>
        </p>
      </motion.section>
    </>
  );
};

export default CreateUser;
