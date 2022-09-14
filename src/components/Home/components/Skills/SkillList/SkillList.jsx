import React from "react";
import styles from "../Skills.module.scss";
import { SkillItem } from "./SkillItem";

export const SkillList = ({ skills }) => {
  return (
    <ul className={styles.info__list}>
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </ul>
  );
};
