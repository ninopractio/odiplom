import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../module/pages/Profile.module.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика входа пользователя
        console.log('Logged in with', email, password);
        onLogin();
        navigate('/dashboard');
    };

    return (
        <div className={styles.form}>
            <h2>Войти</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className={styles.input}
                    placeholder="Почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className={styles.input}
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className={styles.button}>Войти</button>
            </form>
        </div>
    );
};

export default Login;
