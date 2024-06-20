import { useContext } from "react";
import { useForm } from "react-hook-form";
import Context from "../../../../context/Context";
import { GET_TASKS } from "../../../../fetch/getAndPostHome";

const CreateTask = ({ closeCereateTask }) => {
  const { createTask, setCreateTask, setTasks, Title } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const todayDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  const registerTask = (data) => {
    const newTask = {
      ...createTask,
      title: data.title,
      description: data.description,
      priority: data.priority,
      due_date: todayDate,
    };
    console.table(newTask);
    setCreateTask(newTask);
    fetch("https://api-taskmaster.up.railway.app/api/tasks/save-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then(() => {
        GET_TASKS(newTask.id_user, setTasks);
        closeCereateTask();
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-full">
      <div className="flex flex-col items-start mb-2 p-3  border border-[#242424] rounded-lg shadow-lg backdrop-blur-sm bg-black w-[40rem]">
        <h2 className="mb-2 text-[#747474]">
          Esta tarea se creara en la categoria{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {Title}
          </span>
        </h2>
        <form
          onSubmit={handleSubmit(registerTask)}
          className="w-full flex  gap-2"
        >
          <div className="flex flex-col gap-2 w-full ">
            <input
              type="text"
              className="text-[#a0a0a0] w-full  placeholder-[#a0a0a0] focus:outline-0 bg-transparent "
              placeholder="Titulo"
              {...register("title", {
                required: true,
                minLength: {
                  value: 5,
                  message: "El titulo debe tener entre 5 y 40 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "El titulo debe tener entre 5 y 40 caracteres",
                },
              })}
            />
            {errors.title && (
              <p className="text-red-500  text-[.8rem] font-semibold">
                {errors.title.message}
              </p>
            )}
            <textarea
              type="text"
              className="text-[#7A7A7A] text-sm w-full placeholder-[#7A7A7A]  focus:outline-0   h-52 bg-[#181818] rounded-lg  p-2 resize-none"
              placeholder="Descripción"
              {...register("description", {
                required: true,
                minLength: {
                  value: 5,
                  message:
                    "La descripción debe tener entre 5 y 1000 caracteres",
                },
                maxLength: {
                  value: 1000,
                  message:
                    "La descripción debe tener entre 5 y 1000 caracteres",
                },
              })}
            />
            {errors.description && (
              <p className="text-red-500  text-[.8rem] font-semibold">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 items-betwe h- justify-between">
            <select
              name="priority"
              id="priority"
              className="bg-transparent text-[#7A7A7A] text-sm font-bold p-1 cursor-pointer "
              {...register("priority", {
                required: true,
              })}
            >
              <option className="font-bold text-blue-500  " value="low">
                low
              </option>
              <option className="font-bold text-yellow-500  " value="medium">
                medium
              </option>
              <option className="font-bold text-amber-500 " value="high">
                high
              </option>
              <option className="font-bold text-red-500 " value="urgent">
                urgent
              </option>
            </select>
            <button className="text-sm w-full text-green-500 bg-green-500 bg-opacity-15 px-2 py-2 rounded-md  hover:bg-green-500 hover:bg-opacity-30">
              Crear
            </button>
          </div>
        </form>
        <span
          onClick={closeCereateTask}
          className="absolute -top-3  -right-2 px-2  rounded-full bg-red-500 bg-opacity-30 text-red-500 cursor-pointer"
        >
          x
        </span>
      </div>
    </div>
  );
};

export default CreateTask;
