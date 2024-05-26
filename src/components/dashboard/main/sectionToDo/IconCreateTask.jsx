import { PlusOutlined } from "@ant-design/icons";

const IconCreateTask = ({ openCereateTask }) => {
  return (
    <button
      onClick={openCereateTask}
      className="bottom-0 mb-5 mr-5 right-0 absolute p-2 px-3 rounded-full bg-green-500  bg-opacity-20  cursor-pointer text-green-500 hover:bg-opacity-30 ease-out duration-300"
    >
      {" "}
      <PlusOutlined />
    </button>
  );
};

export default IconCreateTask;
