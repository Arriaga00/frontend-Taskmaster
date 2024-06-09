import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = (data) => {
    setLoading(true);
    fetch("http://localhost:3000/api/reload-password/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          message.error("Correo inválido");
          throw new Error("Error al  enviar el correo");
        }
        return res.json();
      })
      .then(() => {
        message.success("Correo enviado correctamente");
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      })
      .finally(() => {
        setLoading2(true);
      });
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen w-full ">
        <div>
          <h1 className="text-center text-3xl font-bold mb-3">
            Reuperar contraseña
          </h1>
          <form onSubmit={handleSubmit(resetPassword)} className="w-96">
            <input
              type="email"
              placeholder="@email.com"
              className="w-full bg-black py-4 px-3 border rounded-md border-[#242424] text-[#7A7A7A] font-bold"
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
            <button
              onClick={() => setLoading2(false)}
              className="mt-5 w-full font-semibold bg-blue-500 py-2 rounded-md bg-opacity-20 text-blue-500 hover:bg-blue-500 hover:bg-opacity-50 ease-out duration-300"
            >
              Reuperar contraseña{loading && <LoadingOutlined />}{" "}
              {loading2 && <CheckOutlined />}
            </button>
          </form>
          <p className="mt-3 textt-start px-1">
            Vovler al{" "}
            <NavLink
              to={"/"}
              className="font-bold text-blue-500 underline cursor-pointer"
            >
              Inicio
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
