// LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Используем useNavigate вместо useHistory

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Используем хук useNavigate для переходов

  const handleLogin = (e) => {
    e.preventDefault();
    // Здесь должна быть логика проверки email и пароля
    // В реальном приложении это будет запрос к серверу или использование аутентификации
    // На уровне примера для упрощения просто вызовим колбэк для успешного входа
    onLogin(email); // передаем email для отображения в профиле
    navigate('/profile'); // переход на страницу профиля после успешного входа
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
