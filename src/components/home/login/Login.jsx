/* eslint-disable no-useless-escape */
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoadingOutlined } from "@ant-design/icons";
import { useContext } from "react";
import Context from "../../../context/Context";
import NavBar from "../../global/NavBar";
import Footer from "../../global/Footer";
import { message } from "antd";
const Login = () => {
  const {
    loading,
    setLoading,
    setUserPersistence,
    setFolders,
    setTasks,
    setFilterTask,
  } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const loginUser = (data) => {
    setLoading(true);
    fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserPersistence(data);
        window.localStorage.setItem("loguinUser", true);
        window.localStorage.setItem("UserData", JSON.stringify(data));
        message.success("se registro correctamente");
        const id = data.user.id;
        fetch(`http://localhost:3000/api/folders/get-folders/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setFolders(data);
            window.localStorage.setItem("Folders", JSON.stringify(data));
            message.success("se cargado correctamente las carpetas");
            // console.log(data);
            fetch(`http://localhost:3000/api/tasks/consult-tasks/${id}`)
              .then((response) => response.json())
              .then((data) => {
                setTasks(data);
                setFilterTask(data);
                window.localStorage.setItem("Task", JSON.stringify(data));
                window.localStorage.setItem("filterTask", JSON.stringify(data));
                message.success("se cargado correctamente las tareras");
                // console.log(data);
              });
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        navigate("/dashboard");
      });
  };

  return (
    <>
      <NavBar />
      <section className="flex flex-col items-center justify-center h-[42rem] w-full mb-28">
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
                value: 40,
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
      </section>
      <Footer />
    </>
  );
};

export default Login;
