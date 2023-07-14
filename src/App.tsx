import { AboutMe } from "./components/about-me/AboutMe";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Technologies } from "./components/technologies/Technologies";

const App = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <>
      <Header />
      <main style={{ width: "100%" }}>
        <AboutMe />
        <Technologies />
      </main>
      <Footer />
    </>
  );
};

export default App;
