// Profile.js
import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import styles from '../module/pages/Profile.module.css';

const Profile = ({ userEmail, appointments }) => {
    return (
      <div className={styles.profile}>
        <h2>Welcome, {userEmail}!</h2>
        <div className={styles.appointments}>
          <p>Your upcoming appointments:</p>
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))}
          </ul>
        </div>
        <button className={styles.changePasswordBtn}>Change Password</button>
      </div>
    );
  };
export default Profile;