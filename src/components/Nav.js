import React from 'react'
import s from '../module/Nav.module.css'
import { NavLink } from 'react-router-dom';
import chelSvg from '../img/chel.svg';


const Nav = () => {
    return (
        <nav>
            <div className={s.nav}>
                <div className='nav-right'>
                    <NavLink to='/start'>ГЛАВНАЯ</NavLink>
                    <NavLink to='/about'>О КЛИНИКЕ</NavLink>
                    <NavLink to='#'>УСЛУГИ</NavLink>
                    <NavLink to='#'>ВРАЧИ</NavLink>
                    <NavLink to='#'>ПАЦИЕНТАМ</NavLink>
                    <NavLink to='#'>ВАКАНСИИ</NavLink>
                    <NavLink to='#'>КОНТАКТЫ</NavLink>
                    <NavLink to='#'>ВОПРОС-ОТВЕТ</NavLink>
                    {/* <img src={chelSvg} alt="Kab" /> */}
                </div> 
                <div className='kab'>
                    <NavLink to='#'> ЛИЧНЫЙ КАБИНЕТ</NavLink>
                </div>
            </div>

        </nav>
    )
}

export default Nav;

