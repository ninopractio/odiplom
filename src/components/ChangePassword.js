import React, { useState } from 'react';
import styles from '../module/pages/Profile.module.css';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика смены пароля пользователя
    console.log('Password changed from', currentPassword, 'to', newPassword);
  };

  return (
    <div className={styles.form}>
      <h2>Сменить пароль</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          className={styles.input}
          placeholder="Текущий пароль"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Новый пароль"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>Сменить пароль</button>
      </form>
    </div>
  );
};

export default ChangePassword;
