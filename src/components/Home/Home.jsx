import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Interests } from "./components/Interests/Interests";
import { Skills } from "./components/Skills/Skills";

export const Home = () => {
  return (
    <>
      <Header />
      <Skills />
      <Interests />
      <Footer />
    </>
  );
};
