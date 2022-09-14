import React from "react";
import styles from "./Footer.module.scss";
import { FooterIcons } from "./FooterIcons/FooterIcons";

export const Footer = () => {
  return (
    <section id="footer" className={styles.section}>
      <h2 className={styles.title}>Мои контакты</h2>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.content}>
            <FooterIcons />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2022 Resume by <span>NKolosov097</span>
      </div>
    </section>
  );
};
