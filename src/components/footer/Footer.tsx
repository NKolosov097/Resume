import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ y: "+100%" }}
      animate={{ y: "0%" }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={styles.footer}
    >
      footer
    </motion.footer>
  );
};
