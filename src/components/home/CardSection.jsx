import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const CardSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 ">
        <article
          className="block rounded-xl border border-neutral-700 p-4 shadow-sm  hover:ring-1   hover:bg-blue-500 hover:bg-opacity-10 hover:border-blue-500 ease-out duration-500"
          href="#"
        >
          <span className="inline-block rounded-lg bg-[#242424] p-3">
            <AppstoreOutlined className="text-blue-500" />
          </span>

          <h2 className="mt-2 font-bold">Interfaz </h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm opacity-60">
            La aplicación presenta una interfaz limpia y fácil de usar
          </p>
        </article>

        <article
          className="block rounded-xl border border-neutral-700 p-4 shadow-sm  hover:ring-1 -200 hover:bg-green-500 hover:bg-opacity-10 hover:border-green-500 ease-out duration-500"
          href="#"
        >
          <span className="inline-block rounded-lg bg-[#242424] p-3">
            <UnorderedListOutlined className="text-green-500" />
          </span>

          <h2 className="mt-2 font-bold">Listas</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm opacity-60">
            Crea listas de tareas específicas para diferentes áreas de tu vida.
          </p>
        </article>

        <article
          className="block rounded-xl border border-neutral-700 p-4 shadow-sm hover:bg-yellow-500 hover:bg-opacity-10 hover:border-yellow-500  ease-out duration-500"
          href="#"
        >
          <span className="inline-block rounded-lg bg-[#242424] p-3">
            <StarOutlined className="text-yellow-500" />
          </span>

          <h2 className="mt-2 font-bold">Priorización </h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm opacity-60">
            Asigna prioridades a tus tareas para saber qué hacer primero
          </p>
        </article>

        <article
          className="block rounded-xl border border-neutral-700 p-4 shadow-sm  hover:bg-teal-500 hover:bg-opacity-10 hover:border-teal-500 ease-out duration-500 "
          href="#"
        >
          <span className="inline-block rounded-lg bg-[#242424] p-3">
            <ClockCircleOutlined className="text-teal-500" />
          </span>

          <h2 className="mt-2 font-bold">Recordatorios</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm opacity-60">
            Configura recordatorios para recibir alertas sobre tareas
            importantes
          </p>
        </article>

        <article
          className="block rounded-xl border border-neutral-700 p-4 shadow-sm hover:bg-violet-500 hover:bg-opacity-10 hover:border-violet-500 ease-out duration-500 "
          href="#"
        >
          <span className="inline-block rounded-lg bg-[#242424] p-3">
            <CalendarOutlined className="text-violet-500" />
          </span>

          <h2 className="mt-2 font-bold">Fechas Límite</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm opacity-60">
            establece fechas límite para mantenerte en el camino correcto.
          </p>
        </article>

        <article
          className="block rounded-xl border border-neutral-700 p-4 shadow-sm hover:bg-amber-500 hover:bg-opacity-10 hover:border-amber-500  ease-out duration-500 "
          href="#"
        >
          <span className="inline-block rounded-lg bg-[#242424] p-3">
            <BarChartOutlined className="text-amber-600" />
          </span>

          <h2 className="mt-2 font-bold">Estadísticas </h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm opacity-60">
            La aplicación recopila datos sobre tus tareas (completadas y
            pendientes.)
          </p>
        </article>
      </div>
    </>
  );
};

export default CardSection;
