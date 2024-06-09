import { NavLink } from "react-router-dom";
import CardSection from "./CardSection";
// import { motion } from "framer-motion";

const SectionHome = () => {
  return (
    <>
      <section
        // transition={{ duration: 1.5 }}
        // animate={{ opacity: 1 }}
        // initial={{ opacity: 0 }}
        // exit={{ opacity: 0 }}
        className="w-full flex justify-center items-center mt-32 mb-32"
      >
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Tu caja de herramientas para tareas diarias✨
              </h2>

              <p className="mt-4   opacity-80">
                es más que una simple lista de tareas. Es tu compañero confiable
                para mantener tus responsabilidades bajo control y liberar
                espacio mental para cosas más importantes. ¡Descárgala hoy y
                simplifica tu vida!
              </p>

              <NavLink
                to={"/signup"}
                className="mt-8 inline-block rounded-full border border-yellow-500 bg-yellow-500 bg-opacity-10 font-bold px-12 py-3 text-sm text-yellow-500 transition hover:bg-yellow-500 hover:text-black ease-out duration-500"
              >
                Comience hoy mismo
              </NavLink>
            </div>

            <CardSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHome;
