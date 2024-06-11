import styles from '../module/Cell.module.css';
import React from "react";
import { Link } from "react-router-dom";

const Cell = ({ title, price, link }) => {
  return (
    <div className={styles.Cell}>
      <div className={styles.Cell__title}>{title}</div>
      <div className={styles.Cell__price}>{price}</div>
      <Link to="/form" className={styles.Cell__button}>Записаться</Link>
      {/* <a href={link} className={styles.Cell__button}>ЗАПИСАТЬСЯ</a> */}
    </div>
  );
}

export default Cell;