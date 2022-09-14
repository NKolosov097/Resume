import React from "react";
import styles from "../Interests.module.scss";
import { InterestsItem } from "./InterestsItem";

export const InterestsList = ({ interests }) => {
  return (
    <ul className={styles.info__list}>
      {interests.map((interest) => (
        <InterestsItem key={interest.id} interest={interest} />
      ))}
    </ul>
  );
};
