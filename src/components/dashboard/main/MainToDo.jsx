import { SvgIconView } from "../../global/svg";
import ToDo from "./sectionToDo/ToDo";

const MainToDo = () => {
  return (
    <>
      <section className="w-full h-full p-5  text-xl font-bold sectionTodo">
        <div className=" w-full border-b border-b-[#242424]">
          <h1 className=" h-10 flex justify-start  text-3xl items-center gradient-text  w-64">
            Todas tus tareas
          </h1>
        </div>
        <main className="w-full h-[97%] flex mainTodo">
          <section className="w-[50%] h-full border-r border-r-[#242424] py-5 pr-5 relative">
            <ToDo />
            <div className="bottom-0 left-0 right-0 absolute w-full flex justify-center items-center mb-2 p-3">
              Contacts
            </div>
          </section>
          <section className="w-[50%] h-full flex justify-center items-center font-bold text-[#7A7A7A] text-lg py-5 pl-5">
            Vista de tareas <SvgIconView />
          </section>
        </main>
      </section>
    </>
  );
};

export default MainToDo;
