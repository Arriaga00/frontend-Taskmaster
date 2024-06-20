import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const { id, email, names } = useParams();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const sedPassword = (data) => {
    setLoading(true);
    const dataSend = {
      id: Number(id),
      email,
      names,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    console.table(dataSend);

    fetch("https://api-taskmaster.up.railway.app/api/users/update-user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSend),
    })
      .then((res) => {
        if (!res.ok) {
          message.error("No se pudo actualizar la contraseña");
          throw new Error("Error al  enviar el correo");
        }
        return res.json();
      })
      .then(() => {
        message.success("Contraseña actualizada correctamente");
        setLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      })
      .finally(() => {
        setLoading2(true);
      });
  };

  const validatePasswordMatch = (value) => {
    const { password } = getValues();
    return value === password || "Las contraseñas no coinciden";
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen w-full ">
        <div>
          <h1 className="text-center text-3xl font-bold mb-3">
            Actualizar contraseña
          </h1>
          <form
            onSubmit={handleSubmit(sedPassword)}
            className="w-96 flex flex-col gap-3"
          >
            <input
              type="password"
              placeholder="nueva contraseña"
              className="w-full bg-black py-4 px-3 border rounded-md border-[#242424] text-[#7A7A7A] font-bold"
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
              <p className="text-red-500 text-[.8rem] font-semibold">
                {errors.password.message}
              </p>
            )}
            <input
              type="password"
              placeholder="confirmar contraseña"
              className="w-full bg-black py-4 px-3 border rounded-md border-[#242424] text-[#7A7A7A] font-bold"
              {...register("confirmPassword", {
                validate: validatePasswordMatch,
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-[.8rem] font-semibold">
                {errors.confirmPassword.message}
              </p>
            )}
            <button
              onClick={() => setLoading2(false)}
              className="mt-5 w-full font-semibold bg-blue-500 py-2 rounded-md bg-opacity-20 text-blue-500 hover:bg-blue-500 hover:bg-opacity-50 ease-out duration-300"
            >
              Confirmar los cambios{loading && <LoadingOutlined />}{" "}
              {loading2 && <CheckOutlined />}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdatePassword;
