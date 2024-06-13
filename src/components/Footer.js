
import s from '../module/Footer.module.css'
import { NavLink } from 'react-router-dom'
import tg from "../img/tg.svg";
import play from "../img/playmarket.png";


import React, { useState, useEffect } from "react";

import styles from "../module/Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <nav className={styles.footer_nav}>
          <ul className={styles.footer_menu}>
            <li className={styles.footer_item}>
              <Link to="/catalog" className={styles.footer_link}>
                О клинике
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/services" className={styles.footer_link}>
                Услуги
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/about" className={styles.footer_link}>
                Врачи
              </Link>
              {/* ВСТАВИТЬ ССЫЛКУ */}
            </li>

            <li className={styles.footer_item}>
              <Link to="/contact" className={styles.footer_link}>
                Контакты
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/contact" className={styles.footer_link}>
                Вакансии
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/contact" className={styles.footer_link}>
                Вопрос-Ответ
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/feedback" className={styles.footer_link}>
                Пациентам
              </Link>
            </li>

          </ul>
        </nav>

        <div className={styles.footer_adress}>
          <a href="tel:+7 988 255 5077" className={styles.footer_tel}>
            +7 988 255 5077
          </a>
          <a href="улица Зорге 16/190" className={styles.footer_tel}>
            улица Зорге 16/190
          </a>
          <a
            className={styles.footer_mail}
            href="mailto:olivamedeco@gmail.com"
          >
            olivamedeco@gmail.com
          </a>
          <div className={styles.ico_link}>

            {/* <a href="https://t.me/SingaService" className={styles.footer_ico_link}> 
              {/* ВСТАВИТЬ ССЫЛКУ */}
            {/* <img src={tg} alt="telegramm" className={styles.footer_ico} /> */}

            <a href="https://t.me/SingaService" className={styles.footer_ico_link}>
              {/* ВСТАВИТЬ ССЫЛКУ */}
              <img src={play} alt="app-mobile" className={styles.footer_ico} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;