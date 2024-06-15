import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
import s from '../module/VrachInfo.module.css';
const VrachInfo = () => {
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
            <h1>ЗАНЯТО НАХУЙ</h1>
            
        </form>
    );
};

export default VrachInfo;