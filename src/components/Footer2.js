import React, { useState, useEffect } from "react";
import styles from "../module/Footer2.module.css";
import { Link } from "react-router-dom";

export const Footer2 = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <nav className={styles.footer_nav}>
          <ul className={styles.footer_menu}>
            <li className={styles.footer_item}>
            <Link to="/about" className={styles.footer_link}>
                  О клинике
                </Link>
            </li>
            <li className={styles.footer_item}>
            <Link to="/services" className={styles.footer_link}>
                Услуги
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/doctors" className={styles.footer_link}>
                Врачи
              </Link>
            </li>

            <li className={styles.footer_item}>
              <Link to="/kontakt" className={styles.footer_link}>
                Контакты
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/vacanc" className={styles.footer_link}>
                Вакансии
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/vopros" className={styles.footer_link}>
                Вопрос-Ответ
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/action" className={styles.footer_link}>
                Акции
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
      
        </div>
      </div>
    </footer>
  );
};

export default Footer2;