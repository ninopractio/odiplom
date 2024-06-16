import React from "react";
import styles from "../module/Vrachi.module.css";
import vrachPng from "../img/vrach.png";
import { NavLink } from "react-router-dom";


const Vrachi = () => {
  return (
    <div className={styles.block}>
      <div className={styles.image}>
        <img src={vrachPng} alt="Image" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>ВРАЧИ</h2>
        <p className={styles.text}>
          Мы гордимся тем, что в нашей клинике:
          <ul>
            <li>работают профессионалы своего дела;</li>
            <li>относятся с заботой к каждому клиенту;</li>
            <li>поддерживается идеальная чистота;</li>
            <li>новейшее оборудование и техника.</li>
          </ul>
          <p className={styles.textniz}>Вы можете ознакомиться с подробным списком врачей</p>
        </p>
        <NavLink to="/Doctors" className={styles.button}>Перейти к списку врачей</NavLink>
      </div>
    </div>
  );
};

export default Vrachi;