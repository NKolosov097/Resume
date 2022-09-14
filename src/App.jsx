import React from "react";
import { Routes, Route, Navigate } from "react-router";
import styles from "./styles/index.module.scss";
import { Home } from "./components/Home/Home.jsx";
import { Footer } from "./components/Home/components/Footer/Footer";

export const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
};
