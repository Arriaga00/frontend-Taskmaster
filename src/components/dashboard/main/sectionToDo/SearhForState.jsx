import { useContext } from "react";
import Context from "../../../../context/Context";

const SearhForState = () => {
  const { setTitle, setFilterTask, Tasks } = useContext(Context);

  const filterForStatus = (status) => {
    const filterForStatus = Tasks.filter((task) => task.status === status);
    console.log(filterForStatus);
    setFilterTask(filterForStatus);
  };

  return (
    <>
      <section className="w-full  flex justify-between items-center gap-2 text-sm m-2 text-[#707070] my-3">
        <span
          onClick={() => {
            setTitle("Todas tus tareas");
            setFilterTask([...Tasks]);
          }}
          className=" px-2 rounded-full py-1 cursor-pointer bg-blue-500 bg-opacity-20 text-blue-400"
        >
          Todo
        </span>
        <div>
          <span
            onClick={() => filterForStatus("pending")}
            className="bg-[#242424] px-2 rounded-full py-1 cursor-pointer hover:bg-blue-500 hover:bg-opacity-15 hover:text-blue-500"
          >
            pending
          </span>
          <span
            onClick={() => filterForStatus("done")}
            className="bg-[#242424] px-2 rounded-full py-1 cursor-pointer hover:bg-green-500 hover:bg-opacity-15 hover:text-green-500"
          >
            done
          </span>
          <span
            onClick={() => filterForStatus("cancelled")}
            className="bg-[#242424] px-2 rounded-full py-1 cursor-pointer hover:bg-red-500 hover:bg-opacity-15 hover:text-red-500"
          >
            cancelled
          </span>
        </div>
      </section>
    </>
  );
};

export default SearhForState;
