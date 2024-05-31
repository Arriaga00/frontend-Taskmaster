import { useContext, useState } from "react";
import { SvgIconSearh, SvgIconView } from "../../global/svg";
import CreateTask from "./sectionToDo/CreateTask";
import IconCreateTask from "./sectionToDo/IconCreateTask";
import ToDo from "./sectionToDo/ToDo";
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-full h-full p-5  text-xl font-bold sectionTodo "
        >
          <div className=" w-full border-b border-b-[#242424] flex justify-between items-center">
            <motion.h1 className=" h-10 flex justify-start  text-3xl items-center gradient-text  w-[80%]">
              {Title}
            </motion.h1>

            <div>
              <label htmlFor="search" className="flex items-center gap-1">
                <SvgIconSearh />
                <input
                  id="search"
                  type="text"
                  placeholder="buscar"
                  className="w-full bg-transparent  focus:outline-0 placeholder-[#7A7A7A] text-sm  text-[#7A7A7A] "
                />
              </label>
            </div>
          </div>
          <main className="w-full h-[97%] flex mainTodo">
            <section className="w-[50%] h-full border-r border-r-[#242424] py-5 pr-5 relative overflow-y-auto pt-0">
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
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default MainToDo;
