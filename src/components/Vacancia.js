import styles from '../module/Vacancia.module.css';
import React from "react";
import { Link } from "react-router-dom";

const Vacancia = ({ title, opis, price, link }) => {
  return (
    <div className={styles.Vacancia}>
      <div className={styles.Vacancia__title}>{title}</div>
      <div className={styles.Vacancia__price}>{price}</div>
      <div className={styles.Vacancia__opis}>{opis}</div>    
      <Link to="/form" className={styles.Vacancia__button}>Откликнуться</Link>
       
    </div>
  );
}

export default Vacancia;