import React from "react";
import styles from "../Interests.module.scss";

export const InterestsItem = ({ interest }) => {
  return (
    <li className={styles.info__item}>
      <span className={styles.info__content}>{interest.text}</span>
    </li>
  );
};
