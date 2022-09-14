import React from "react";
import { SkillList } from "./SkillList/SkillList";
import styles from "./Skills.module.scss";
import avatar from "../../../images/avatar_1.jpeg";

export const Skills = () => {
  const skills = [
    {
      id: 1,
      text: "Хорошо знаю HTML, CSS, JavaScript",
    },
    {
      id: 2,
      text: "Работал с препроцессорам SASS",
    },
    {
      id: 3,
      text: "Пишу на React",
    },
    {
      id: 4,
      text: "Немного знаю внутреннюю реализацию React (дерево волокон - three fiber - linked list)",
    },
    {
      id: 5,
      text: "Есть опыт использования styled-components, css-module, classnames",
    },
    {
      id: 6,
      text: "Для стилизации использовал библиотеку Ant Design",
    },
    {
      id: 7,
      text: "Придерживаюсь методологии БЭМ",
    },
    {
      id: 8,
      text: "Есть опыт работы с условным рендерингом и сервером через proxy",
    },
    {
      id: 9,
      text: "Хорошо работаю в команде и умею слушать здравую критику, не вижу в ней ничего плохого : )",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Мои навыки</h2>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <SkillList skills={skills} />
        </div>
        <div className={styles.img__wrapper}>
          <img className={styles.img} src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
};
