import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Добавляем импорт useNavigate
import styles from '../module/pages/Profile.module.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика регистрации пользователя
        console.log('Registered with', email, password);
        navigate('/login');
    };
  
    return (
        <div className={styles.form}>
            <h2>Регистрация</h2>
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
                <button type="submit" className={styles.button}>Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Register;
