import React, { useState } from 'react';
import s from '../module/pages/Profile.module.css';

const Profile = ({ userEmail, appointments }) => {
  return (
    <section className={s.container}>
     
      <div className={s.cont}>
      <div className={s.dashboard}>
        <h2 className={s.title}>Личный кабинет</h2>
        <div className={s.infoBlock}>
          <div className={s.label}>Ваша почта:</div>
          <div className={s.value}>user@example.com</div>
        </div>
        <div className={s.infoBlock}>
          <div className={s.label}>Пароль:</div>
          <div className={s.value}>********</div>
        </div>
        <div className={s.infoBlock}>
          <div className={s.label}>Предстоящие записи:</div>
          <div className={s.value}>Нет предстоящих записей</div>
        </div>
        <button className={s.changePasswordButton}>Сменить пароль</button>
      </div>
      </div>
    </section>
      
    );
  };
export default Profile;