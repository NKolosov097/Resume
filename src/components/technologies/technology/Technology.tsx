import { motion } from "framer-motion";
import styles from "./Technology.module.css";

interface ITechnologyProps {
  icon: React.ReactNode;
  description: string;
}

export const Technology = ({ icon, description }: ITechnologyProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className={styles.technology}
      title={description}
    >
      {icon}
    </motion.div>
  );
};
