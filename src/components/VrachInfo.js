import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import s from '../module/VrachInfo.module.css';

const VrachInfo = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        branch: "",
        comment: "",
    });

    const [errors, setErrors] = useState({});
    const [specialistInfo] = useState({
        fullName: "Иванов Иван Иванович",
        specialty: "Кардиолог"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = "Пожалуйста, укажите ваше имя";
        if (!formData.phoneNumber) errors.phoneNumber = "Пожалуйста, укажите ваш номер телефона";
        if (!formData.email) errors.email = "Пожалуйста, укажите ваш адрес электронной почты";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // отправить форму на сервер
        }
    };

    return (
        <div>
            <h1>ИНФОРМАЦИЯ О СПЕЦИАЛИСТЕ</h1>
            
            <p><strong>ФИО:</strong> {specialistInfo.fullName}</p>
            <p><strong>Специальность:</strong> {specialistInfo.specialty}</p>
            
            <form onSubmit={handleSubmit}>
                <h1>ЗАПИСАТЬСЯ НА ПРИЕМ</h1>
                
                <label htmlFor="name"></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Имя" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                {errors.name && <p className="error">{errors.name}</p>}
                
                <label htmlFor="phoneNumber"></label>
                <input 
                    type="text" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    placeholder="Номер телефона" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                />
                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                
                <label htmlFor="email"></label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Электронная почта" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                {errors.email && <p className="error">{errors.email}</p>}
                
                <label htmlFor="branch"></label>
                
                <label htmlFor="comment"></label>
                <textarea 
                    id="comment" 
                    name="comment" 
                    placeholder="Комментарий" 
                    value={formData.comment} 
                    onChange={handleChange}
                ></textarea>
                
                <div className={s.silk}>
                    <label>
                        <input type="checkbox" /> <NavLink to='/politika'>Согласен с политикой конфиденциальности</NavLink>  
                    </label>
                </div>
                
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default VrachInfo;
