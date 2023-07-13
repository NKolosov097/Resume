import styles from "./Header.module.css";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={styles.header}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        resume
      </motion.span>
    </motion.header>
  );
};
