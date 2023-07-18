import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { BsGithub } from "react-icons/bs";
import { AiFillGitlab, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "./link/Link";
import { FaTelegramPlane } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { PiInstagramLogoFill } from "react-icons/pi";

export const Footer = () => {
  const links = [
    {
      icon: <BsGithub size={40} />,
      description: "GitHub",
      href: "https://github.com/NKolosov097",
    },
    {
      icon: <AiFillGitlab size={40} />,
      description: "GitLab",
      href: "https://gitlab.com/NKolosov097",
    },
    {
      icon: <FaTelegramPlane size={40} />,
      description: "Telegram",
      href: "https://t.me/NKolosov097",
    },
    // {
    //   icon: <LiaFacebookF size={40} />,
    //   description: "Facebook",
    //   href: "",
    // },
    // {
    //   icon: <AiOutlineTwitter size={40} />,
    //   description: "Twitter",
    //   href: "",
    // },
    {
      icon: <PiInstagramLogoFill size={40} />,
      description: "Instagram",
      href: "https://instagram.com/p/B5UHJ6ln_ii/",
    },
  ];

  return (
    <motion.footer
      initial={{ y: "+100%" }}
      animate={{ y: "0%" }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={styles.footer}
    >
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.description}
            href={link.href}
            icon={link.icon}
            description={link.description}
          />
        ))}
      </div>
    </motion.footer>
  );
};
