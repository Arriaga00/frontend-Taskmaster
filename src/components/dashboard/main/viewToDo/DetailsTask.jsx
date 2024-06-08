import { useContext, useEffect, useState } from "react";
import Context from "../../../../context/Context";
import { useForm } from "react-hook-form";
import { LoadingOutlined } from "@ant-design/icons";
import { SvgDeletet } from "../../../global/svg";

const DetailsTask = () => {
  const { OpenViewTask, setOpenViewTask, setTasks, UserPersistence } =
    useContext(Context);
  const [inputCgrange, setInputCgrange] = useState(false);
  useEffect(() => {
    setValue("title", OpenViewTask.title);
    setValue("description", OpenViewTask.description);
    setValue("priority", OpenViewTask.priority);
    setValue("status", OpenViewTask.status);
    setValue("due_date", OpenViewTask.due_date);
  }, [
    OpenViewTask.title,
    OpenViewTask.description,
    OpenViewTask.priority,
    OpenViewTask.status,
    OpenViewTask.due_date,
    inputCgrange,
  ]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  if (!UserPersistence) {
    return <LoadingOutlined />;
  }

  const User =
    UserPersistence.user && UserPersistence.user.id
      ? UserPersistence.user.id
      : undefined;

  const onChange = () => {
    console.log(inputCgrange);
    setInputCgrange(true);
  };

  const modifyTask = (data) => {
    const updateTask = { id: OpenViewTask.id, ...data };
    console.table(updateTask);

    fetch(`http://localhost:3000/api/tasks/update-task`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTask),
    })
      .then((response) => response.json())
      .then(() => {
        fetch(`http://localhost:3000/api/tasks/consult-tasks/${User}`)
          .then((response) => response.json())
          .then((data) => {
            window.localStorage.setItem("Task", JSON.stringify(data));
            setTasks(data);
            console.table(data);
            window.location.reload();
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const priority = {
    low: "text-blue-500  bg-blue-500 bg-opacity-10 text-opacity-50 has-[:checked]:text-opacity-100 has-[:checked]:bg-opacity-20",
    medium:
      "text-yellow-500  bg-yellow-500 bg-opacity-10 text-opacity-50 has-[:checked]:text-opacity-100 has-[:checked]:bg-opacity-20",
    high: "text-amber-500  bg-amber-500 bg-opacity-10 text-opacity-50 has-[:checked]:text-opacity-100 has-[:checked]:bg-opacity-20",
    urgent:
      "text-red-500  bg-red-500 bg-opacity-10 text-opacity-50 has-[:checked]:text-opacity-100 has-[:checked]:bg-opacity-20",
  };

  const state = {
    pending:
      "text-blue-500 text-opacity-50  bg-blue-500 bg-opacity-10 has-[:checked]:text-opacity-100 has-[:checked]:bg-opacity-20",
    cancelled:
      "text-red-500 text-opacity-50 bg-red-500 bg-opacity-10 has-[:checked]:text-opacity-100 has-[:checked]:bg-opacity-20",
    done: "text-green-500 text-opacity-50 bg-green-500 bg-opacity-10 has-[:checked]:text-opacity-100 has-[:checked]:bg-opacity-20",
  };

  return (
    <>
      <section className="w-full h-full pl-5 pt-5 bg-[#171717] rounded-lg relative">
        <form onSubmit={handleSubmit(modifyTask)} className="pr-5 w-full">
          <input
            onBlur={onChange}
            type="text"
            className="bg-[#171717] focus:outline-0 text-3xl font-bold h-20 flex justify-start items-center w-full"
            {...register("title", {
              maxLength: {
                value: 45,
                message: "El titulo debe tener entre 5 y 45 caracteres",
              },
              minLength: {
                value: 5,
                message: "El titulo debe tener entre 5 y 45 caracteres",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500  text-[.8rem] font-semibold ">
              {errors.title.message}
            </p>
          )}
          <div className="relative">
            <textarea
              className="focus:outline-0  bg-[#242424] w-full h-72 max-h-96 p-3 resize-none rounded-lg"
              {...register("description", {
                maxLength: {
                  value: 1000,
                  message: "El descripcion debe tener entre 2 y 200 caracteres",
                },
                minLength: {
                  value: 2,
                  message: "El descripcion debe tener entre 2 y 200 caracteres",
                },
              })}
            />
            <span
              className={`absolute bottom-3  right-1 px-2  text-sm rounded-full bg-[#4a4a4a] bg-opacity-50 text-[#707070] `}
            >
              {watch("description") ? watch("description").length : 0}/1000
            </span>
          </div>
          {errors.description && (
            <p className="text-red-500  text-[.8rem] font-semibold ">
              {errors.description.message}
            </p>
          )}
          <div className="w-full flex flex-row items-center justify-between mb-3 mt-3">
            <p className="text-sm ml-1">Prioridad:</p>
            <div className="flex gap-2">
              <label
                htmlFor="low"
                className={`text-sm font-bold px-2 py-1 rounded-full ${priority.low} cursor-pointer label_radio`}
              >
                low
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  id="low"
                  className="sr-only"
                  {...register("priority")}
                />
              </label>
              <label
                htmlFor="medium"
                className={`text-sm font-bold px-2 py-1 rounded-full ${priority.medium} cursor-pointer label_radio `}
              >
                medium
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  id="medium"
                  className="sr-only "
                  {...register("priority")}
                />
              </label>
              <label
                htmlFor="high"
                className={`text-sm font-bold px-2 py-1 rounded-full ${priority.high} cursor-pointer label_radio`}
              >
                high
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  id="high"
                  className="sr-only"
                  {...register("priority")}
                />
              </label>
              <label
                htmlFor="urgent"
                className={`text-sm font-bold px-2 py-1 rounded-full ${priority.urgent} cursor-pointer label_radio`}
              >
                urgent
                <input
                  type="radio"
                  name="priority"
                  value="urgent"
                  id="urgent"
                  className="sr-only"
                  {...register("priority")}
                />
              </label>
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-between mb-3">
            <p className="text-sm ml-1">Estado:</p>
            <div className="flex gap-2">
              <label
                htmlFor="pending"
                className={`text-sm font-bold px-2 py-1 rounded-full ${state.pending} cursor-pointer label_radio`}
              >
                {" "}
                Pending{" "}
                <input
                  type="radio"
                  name="status"
                  value="pending"
                  id="pending"
                  className="sr-only"
                  {...register("status")}
                />
              </label>
              <label
                htmlFor="done"
                className={`text-sm font-bold px-2 py-1 rounded-full ${state.done} cursor-pointer label_radio`}
              >
                {" "}
                Done{" "}
                <input
                  type="radio"
                  name="status"
                  value="done"
                  id="done"
                  className="sr-only"
                  {...register("status")}
                />
              </label>
              <label
                htmlFor="cancelled"
                className={`text-sm font-bold px-2 py-1 rounded-full ${state.cancelled} cursor-pointer label_radio`}
              >
                {" "}
                Cancelled{" "}
                <input
                  type="radio"
                  name="status"
                  value="cancelled"
                  id="cancelled"
                  className="sr-only"
                  {...register("status")}
                />
              </label>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between mb-3">
            <p className="text-sm ml-1">Fecha de vencimiento:</p>
            <label htmlFor="date">
              <input
                id="date"
                type="date"
                className=" bg-transparent focus:outline-0 text-sm text-[#7A7A7A]"
                {...register("due_date")}
              />
            </label>
          </div>
          <div className="w-full h-32 flex justify-end items-center">
            <button className="text-sm  rounded-lg bg-yellow-500 bg-opacity-10 text-yellow-500 px-2 py-2 hover:bg-opacity-20">
              Guarda tus cambios
            </button>
          </div>
        </form>
        <span
          onClick={() => setOpenViewTask([])}
          className="absolute top-2  right-0 px-2  cursor-pointer"
        >
          <SvgDeletet />
        </span>
      </section>
    </>
  );
};

export default DetailsTask;
