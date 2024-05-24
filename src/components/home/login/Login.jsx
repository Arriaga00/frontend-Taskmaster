/* eslint-disable no-useless-escape */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { POST_LOGIN, GET_FOLDERS } from "../../../fetch/getAndPostHome";
import { LoadingOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../../context/Context";

const Login = () => {
  const navigate = useNavigate();
  const { setUserPersistence, setFolders, UserPersistence } =
    useContext(Context);
  const [loading, setLoading] = useState(false);

  if (!UserPersistence) {
    <LoadingOutlined />;
  }
  const User =
    UserPersistence && UserPersistence.user.id ? (
      UserPersistence.user.id
    ) : (
      <LoadingOutlined />
    );

  const loginUser = (data) => {
    setLoading(true);
    POST_LOGIN(data, setLoading, navigate, setUserPersistence);
    setTimeout(() => {
      GET_FOLDERS(User, setFolders);
    }, 2500);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <motion.section
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center h-[42rem] w-full mb-28"
      >
        <h1 className="text-4xl font-bold">Inicia sesión</h1>
        <form
          onSubmit={handleSubmit(loginUser)}
          className="flex flex-col items-center justify-center w-96 gap-3 mt-10 mb-6"
        >
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
          {errors.password && (
            <p className="text-red-500  text-[.8rem] font-semibold">
              {errors.password.message}
            </p>
          )}
          <button className="bg-black border border-[#242424] w-full font-bold  px-4 py-2 rounded-md text-green-500 hover:bg-green-100 hover:bg-opacity-10 hover:border-green-500 ease-out duration-300">
            Ingresar{" "}
            {loading ? (
              <LoadingOutlined style={{ fontWeight: "bold" }} />
            ) : null}
          </button>
        </form>
        <p className="flex gap-5 items-center  text-[#707070]">
          No tienes cuenta?{" "}
          <NavLink
            to={"/home/signup"}
            className="font-bold underline decoration-2 hover:text-blue-500 cursor-pointer ease-out duration-300"
          >
            Regístrate
          </NavLink>
        </p>
      </motion.section>
    </>
  );
};

export default Login;
