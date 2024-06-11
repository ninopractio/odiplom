import React from "react";
import styles from '../module/Services.module.css';
import lewPng from '../img/lew.png';
import prawPng from '../img/praw.png';


const Services = () => {
  return (
    <section>
    <div className={styles.block}>
      <h2 className={styles.title}>УСЛУГИ</h2>
      <div className={styles.imageAndText}>
        <img src={lewPng} alt="ЛЕВАЯ" /><p className={styles.text}>
        Наша клиника предоставляет большой спектр услуг для вашего здоровья.</p>
        <img src={prawPng} alt="ПРАВАЯ" />
      </div>
      <div className={styles.columns}>
        <ul className={styles.column}>
          <li>Гинекология</li>
          <li>Дерматовенерология</li>
          <li>Эндокринология</li>
          <li>Неврология</li>
          <li>Психология</li>
          <li>Медицинский массаж</li>
        </ul>
        <ul className={styles.column}>
          <li>Терапия</li>
          <li>Диетология</li>
          <li>Оториноларингология</li>
          <li>Аллергология-иммунология</li>
          <li>Урология</li>
        </ul>
        <ul className={styles.column}>
          <li>УЗИ</li>
          <li>Ревматология</li>
          <li>Гемостезиология</li>
          <li>Нефрология</li>
          <li>Офтальмология</li>
          <li>Педиатрия</li>
        </ul>
      </div>
      <p className={styles.bottomText}>Вы можете записаться на необходимую услугу с помощью удобной формы.</p>
    </div>
    </section>
  );
};

export default Services;