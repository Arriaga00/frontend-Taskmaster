import { useContext } from "react";
import Context from "../../../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";

const CheckView = () => {
  const { Tasks, setOpenViewTask } = useContext(Context);

  if (!Tasks) {
    return <LoadingOutlined />;
  }

  const state = {
    pending: "text-blue-500  bg-blue-500 bg-opacity-10",
    cancelled: "text-red-500  bg-red-500 bg-opacity-10",
    done: "text-green-500  bg-green-500 bg-opacity-10",
  };

  const priority = {
    low: "text-blue-500  bg-blue-500 bg-opacity-10",
    medium: "text-yellow-500  bg-yellow-500 bg-opacity-10",
    high: "text-amber-500  bg-amber-500 bg-opacity-10",
    urgent: "text-red-500  bg-red-500 bg-opacity-10",
  };

  return (
    <>
      {Tasks.map((task) => {
        const viewState = state[task.status];
        const viewPriority = priority[task.priority];
        return (
          <article
            key={task.id}
            className="mb-2"
            onClick={() => setOpenViewTask(task)}
          >
            <div className="space-y-2">
              <label
                htmlFor="Option1"
                className="flex  items-start gap-4 rounded-lg  p-2 transition hover:bg-[#242424] bg-[#171717] cursor-pointer"
              >
                <div className="w-full">
                  <strong className="font-medium text-[#bcbcbc]">
                    {task.title}
                  </strong>
                  <div className="flex justify-between items-center">
                    <p className="mt-1 text-pretty text-sm text-[#707070] line-clamp-1 ">
                      {task.description}
                    </p>
                    <div className="flex items-center gap-1">
                      <span
                        className={`text-sm mt-1 font-bold px-2 py-1  rounded-full ${viewState}`}
                      >
                        {task.status}
                      </span>
                      <span
                        className={`text-sm mt-1 font-bold px-2 py-1  rounded-full ${viewPriority}`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default CheckView;
