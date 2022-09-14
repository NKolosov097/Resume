import React from "react";
import styles from "../Footer.module.scss";
import { GlobalSvgSelector } from "../../GlobalSvgSelector/GlobalSvgSelector";

export const FooterItem = ({ icon }) => {
  return (
    <a
      href={icon.href}
      target="_blank"
      className={styles.footer__item}
      rel="noreferrer"
    >
      <GlobalSvgSelector key={icon.id} id={icon.id} />
    </a>
  );
};
