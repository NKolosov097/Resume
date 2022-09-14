import React from "react";
import styles from "./Interests.module.scss";
import avatar from "../../../images/avatar_2.jpg";
import { InterestsList } from "./InterestsList/InterestsList";

export const Interests = () => {
  const interests = [
    {
      id: 1,
      text: 'Учусь на 3 курсе института по направлению "Системный анализ и управление"',
    },
    {
      id: 2,
      text: "Занимаюсь Frontend-ом 1.5 года",
    },
    {
      id: 3,
      text: "Разрабатываю сейчас преимущественно на React",
    },
    {
      id: 4,
      text: "В 9 классе рассылал во все игровые студии свою идею по созданию игры. Мне никто не ответил, но это не главное : )",
    },
    {
      id: 5,
      text: "Увлекаюсь мотоспортом, плаванием",
    },
    {
      id: 6,
      text: "Сейчас изучаю автотесты и Local Storage",
    },
  ];

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>Мои увлечения</h2>
        <div className={styles.wrapper}>
          <div className={styles.img__wrapper}>
            <img className={styles.img} src={avatar} alt="avatar" />
          </div>
          <div className={styles.info}>
            <div className={styles.content}>
              <InterestsList interests={interests} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
