import { SvgIconView } from "../../global/svg";

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
          <div className="w-[50%] h-full border-r border-r-[#242424]"></div>
          <div className="w-[50%] h-full flex justify-center items-center font-bold text-[#7A7A7A] text-lg">
            Vista de tareas <SvgIconView />
          </div>
        </main>
      </section>
    </>
  );
};

export default MainToDo;
