import React from "react";
import styles from "../module/Contacts.module.css";
import clinicPng from "../img/clinic.png";
import { NavLink } from "react-router-dom";


const Contacts = () => {
    return (
        <div className={styles.block}>
          <div className={styles.image}>
            <img src={clinicPng} alt="Image" />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>КОНТАКТЫ</h2>
            <p className={styles.text}>
              График работы:
              <ul>
                <li>пн-вс с 08:00 до 20:00</li>
                <li>г.Ростов-на-Дону, ул.Пушкинская, 76А</li>
                <li>+7(888)888-88-88</li>
                <li>работаем без выходных</li>
               
              </ul>
              
            </p>
            <NavLink to="/about" className={styles.button}>Узнать больше о клинике</NavLink>
            
          </div>
        </div>
      );
  };


export default Contacts;