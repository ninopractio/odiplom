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
              <Link to="/Doctors" className={styles.footer_link}>
                Врачи
              </Link>

            </li>

            <li className={styles.footer_item}>
              <Link to="/Kontakt" className={styles.footer_link}>
                Контакты
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/Vacanc" className={styles.footer_link}>
                Вакансии
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/Vopros" className={styles.footer_link}>
                Вопрос-Ответ
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/Action" className={styles.footer_link}>
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

export default Footer;