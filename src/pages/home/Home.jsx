import Footer from "../../components/global/Footer";
import NavBar from "../../components/global/NavBar";

import RoutesPublic from "../../router/RoutesPublic";
const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <RoutesPublic />
      </main>
      <Footer />
    </>
  );
};

export default Home;
