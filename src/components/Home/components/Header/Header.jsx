import React from "react";
import styles from "./Header.module.scss";
import avatar from "../../../images/avatar_3.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.img__wrappper}>
          <img className={styles.img} src={avatar} alt="avatar" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.fullname}>Колосов Никита</h2>
          <h3 className={styles.post}>Trainee Frontend Developer</h3>
          <div className={styles.city}>Moscow</div>
          <Link
            to="footer"
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.toContact}
          >
            Связаться
          </Link>
        </div>
      </div>
    </header>
  );
};
