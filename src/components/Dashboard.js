import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../module/pages/Profile.module.css';

const Dashboard = () => {
  return (
    <div>
      <h2>Добро пожаловать в личный кабинет</h2>
      <nav className={styles.nav}>
        <Link to="/appointments" className={styles.navLink}>Мои записи</Link>
        <Link to="/change-password" className={styles.navLink}>Сменить пароль</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
