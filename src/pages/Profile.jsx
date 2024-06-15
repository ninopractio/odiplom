import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Appointments from '../components/Appointments';
import ChangePassword from '../components/ChangePassword';
import styles from '../module/pages/Profile.module.css';

const Profile = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div className={styles.profileContainer}>
            <header className={styles.header}>
                <h1>Личный кабинет</h1>
                {isAuthenticated ? (
                    <button onClick={handleLogout} className={styles.button}>Выйти</button>
                ) : (
                    <nav className={styles.nav}>
                        <Link to="/login" className={styles.navLink}>Войти</Link>
                        <Link to="/register" className={styles.navLink}>Регистрация</Link>
                    </nav>
                )}
            </header>
            
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/appointments" element={isAuthenticated ? <Appointments /> : <Navigate to="/login" />} />
                <Route path="/change-password" element={isAuthenticated ? <ChangePassword /> : <Navigate to="/login" />} />
                <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
            </Routes>
        </div>
    );
};

export default Profile;
