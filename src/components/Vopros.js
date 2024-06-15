import styles from '../module/Vopros.module.css';
import React from "react";
import { Link } from "react-router-dom";

const Vopros = ({ title, opis, link }) => {
  return (
    <div className={styles.Vopros}>
      <div className={styles.Vopros__title}>{title}</div>
      <div className={styles.Vopros__opis}>{opis}</div>    
      {/* <Link to="/form" className={styles.Vopros__button}>Задать вопрос</Link> */}
       
    </div>
  );
}

export default Vopros;