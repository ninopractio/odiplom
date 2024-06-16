import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import s from '../module/VrachInfo.module.css';
import Otziv from "./Otziv";

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
        specialty: "Кардиолог",
        phone: "89043488542",
        sex: "Мужской"
    });

    const [reviews] = useState([
        { id: 1, comment: "Отличный врач, помог с проблемой." },
        { id: 2, comment: "Очень внимательный и доброжелательный." },
        { id: 3, comment: "Очень внимательный и доброжелательный." },
        { id: 4, comment: "Очень внимательный и доброжелательный." },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

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

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (isModalOpen && modalRef.current) {
            modalRef.current.scrollTo(0, 0); // Прокрутка к началу модального окна
        }
    }, [isModalOpen]);

    return (
        <div>
            <h1>ИНФОРМАЦИЯ О СПЕЦИАЛИСТЕ</h1>
            <p><strong>ФИО:</strong> {specialistInfo.fullName}</p>
            <p><strong>Специальность:</strong> {specialistInfo.specialty}</p>
            <p><strong>Номер телефона:</strong> {specialistInfo.phone}</p>
            <p><strong>Пол:</strong> {specialistInfo.sex}</p>
            
            <h2>Отзывы</h2>
            <Otziv />
            <div className={s.reviewsContainer}>
                {reviews.map(review => (
                    <div key={review.id} className={s.review}>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>

            <button onClick={() => setIsModalOpen(true)}>Открыть форму</button>

            {isModalOpen && (
                <div className={s.modalOverlay} onClick={handleOverlayClick}>
                    <div className={s.modalContent} ref={modalRef}>
                        {/* <button className={s.closeButton} onClick={() => setIsModalOpen(false)}>×</button> */}
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
                </div>
            )}
        </div>
    );
};

export default VrachInfo;
