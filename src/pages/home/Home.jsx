import Footer from "../../components/global/Footer";
import NavBar from "../../components/global/NavBar";
import SectionHome from "../../components/home/SectionHome";

const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <SectionHome />
      </main>
      <Footer />
    </>
  );
};

export default Home;
