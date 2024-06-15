import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
import s from '../module/Formvac.module.css';
const Formvac = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        comment: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = "Пожалуйста, укажите ваше имя";
        if (!formData.phoneNumber) errors.phoneNumber = "Пожалуйста, укажите ваш номер телефона";
        if (!formData.email) errors.email = "Пожалуйста, укажите ваш адрес электронной почты";
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // отправить форму на сервер
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>ОТКЛИКНУТЬСЯ НА ВАКАНСИЮ</h1>
            <h2>Предоставьте свои данные и мы свяжемся с вами</h2>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
            <label htmlFor="phoneNumber"></label>
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Номер телефона" value={formData.phoneNumber} onChange={handleChange} />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Электронная почта" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
            <label htmlFor="branch"></label>
           
            {errors.branch && <p className="error">{errors.branch}</p>}
            <label htmlFor="comment"></label>
            <textarea id="comment" name="comment" placeholder="Укажите специальность" value={formData.comment} onChange={handleChange}></textarea>
            <div className={s.silk}>
            <label>
                <input type="checkbox" /> Согласен с <NavLink to='/politika'>политикой конфиденциальности</NavLink>  
            </label>
                </div>
            <button type="submit">Откликнуться</button>
        </form>
    );
};

export default Formvac;