import { motion } from "framer-motion";
import style from "./Link.module.css";

interface ILinkProps {
  icon: React.ReactNode;
  description: string;
  href: string;
}

export const Link = ({ icon, description, href }: ILinkProps) => {
  return (
    <motion.a
      className={style.link}
      title={description}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      href={href}
      target="_blank"
    >
      {icon}
    </motion.a>
  );
};
