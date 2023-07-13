import { AboutMe } from "./components/about-me/AboutMe";
import { AppWrapper } from "./components/app-wrapper/AppWrapper";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Technologies } from "./components/technologies/Technologies";

const App = () => {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);
  return (
    <AppWrapper>
      <Header />
      <main style={{ width: "100%" }}>
        <AboutMe />
        <Technologies />
      </main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
