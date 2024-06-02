import { useContext } from "react";
import { useForm } from "react-hook-form";
import Context from "../../../../context/Context";

const CreateTask = ({ closeCereateTask }) => {
  const { createTask, setCreateTask } = useContext(Context);
  const { register, handleSubmit } = useForm();

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
    setCreateTask(newTask);
    console.table(data);
  };

  return (
    <div className=" bottom-0 left-0 right-0 absolute ">
      <div className=" static  w-[97%] flex  items-center mb-2 p-3  border border-[#242424] rounded-lg shadow-lg backdrop-blur-[4px] glass bg-[rgba(255,255,255,0)]">
        <form
          onSubmit={handleSubmit(registerTask)}
          className="w-full flex  gap-2"
        >
          <div className="flex flex-col gap-2 w-full ">
            <input
              type="text"
              className="text-[#7A7A7A] w-full  placeholder-[#7A7A7A] focus:outline-0 bg-transparent backdrop-blur-[4px] shadow-lg"
              placeholder="Titulo"
              {...register("title", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
            />
            <input
              type="text"
              className="text-[#7A7A7A] text-sm w-full placeholder-[#7A7A7A] focus:outline-0 bg-transparent backdrop-blur-[4px] shadow-lg"
              placeholder="Descripción"
              {...register("description", {
                required: true,
                minLength: 3,
                maxLength: 200,
              })}
            />
          </div>
          <div className="flex flex-col gap-2 items-center h-full ">
            <select
              name="priority"
              id="priority"
              className="bg-black text-[#7A7A7A] text-sm font-bold p-1 cursor-pointer"
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
            <button
              type="submit"
              className="text-sm w-full text-green-500 border border-[#242424] px-2 py-1 rounded-lg hover:bg-green-500 hover:bg-opacity-10"
            >
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
