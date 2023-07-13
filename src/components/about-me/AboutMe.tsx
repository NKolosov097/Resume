import styles from "./AboutMe.module.css";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const wordsFullName = "Kolosov Nikita".split(" ");
  const wordsDescription = "Front-End Developer".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className={styles.section}>
      <motion.div
        style={{ overflow: "hidden" }}
        variants={container}
        initial="hidden"
        animate="visible"
        className={styles.headers}
      >
        <h1 className={styles.h1}>
          {wordsFullName.map((word, index) => (
            <motion.span
              variants={child}
              style={{ marginRight: "10px", marginLeft: "10px" }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <h2 className={styles.h2}>
          {wordsDescription.map((word, index) => (
            <motion.span
              variants={child}
              style={{ marginRight: "10px", marginLeft: "10px" }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
        className={styles.imgWrapper}
      >
        <div className={styles.img} />
      </motion.div>
    </section>
  );
};
