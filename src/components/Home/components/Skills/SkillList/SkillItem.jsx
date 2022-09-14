import React from "react";
import styles from "../Skills.module.scss";

export const SkillItem = ({ skill }) => {
  return (
    <li className={styles.info__item}>
      <span className={styles.info__content}>{skill.text}</span>
    </li>
  );
};
