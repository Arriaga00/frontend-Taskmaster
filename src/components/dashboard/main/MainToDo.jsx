import { useContext, useState } from "react";
import { SvgIconView } from "../../global/svg";
import CreateTask from "./sectionToDo/CreateTask";
import IconCreateTask from "./sectionToDo/IconCreateTask";
import ToDo from "./sectionToDo/ToDo";
import CardUser from "../user/CardUser";

import Context from "../../../context/Context";
import DetailsTask from "./viewToDo/DetailsTask";

const MainToDo = () => {
  const { OpenViewTask, Title } = useContext(Context);
  const [formTask, setFormTask] = useState(false);

  const openCereateTask = () => {
    setFormTask(!formTask);
  };

  return (
    <>
      <section className="w-full h-full p-5  text-xl font-bold sectionTodo  padinInter">
        <div className=" w-full border-b border-b-[#242424] flex justify-between items-center">
          <h1 className=" h-10 flex justify-start  text-3xl items-center gradient-text  w-[80%]">
            {Title}
          </h1>

          <div className="">
            <CardUser />
          </div>
        </div>
        <main className="w-full h-[97%] flex mainTodo ">
          <section className="w-[50%] h-full border-r border-r-[#242424] py-5 pr-5 relative overflow-y-auto pt-0 overflow-y scrollCss ">
            <ToDo />
            {formTask ? (
              <CreateTask closeCereateTask={openCereateTask} />
            ) : (
              <IconCreateTask openCereateTask={openCereateTask} />
            )}
          </section>
          <section className="w-[50%] h-full flex justify-center items-center font-bold text-[#7A7A7A] text-lg py-5 pl-5">
            {OpenViewTask.length === 0 ? (
              <p className="flex justify-center items-center gap-1">
                Vista de tareas <SvgIconView />
              </p>
            ) : (
              <DetailsTask />
            )}
          </section>
        </main>
      </section>
    </>
  );
};

export default MainToDo;
