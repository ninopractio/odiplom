import styles from '../module/Doctor.module.css';
import React from "react";
import { Link } from "react-router-dom";

const Doctor = ({ title, price, link }) => {
  return (
    <div className={styles.Cell}>
      <div className={styles.Cell__title}>{title}</div>
      <div className={styles.Cell__price}>{price}</div>
      <Link to="/form" className={styles.Cell__button}>Записаться</Link>
    </div>
  );
}

export default Doctor;