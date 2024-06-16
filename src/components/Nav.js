import React from 'react'
import s from '../module/Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className={s.nav}>
                <div className='nav-right'>
                    <NavLink to='/start'>ГЛАВНАЯ</NavLink>
                    <NavLink to='/about'>О КЛИНИКЕ</NavLink>
                    <NavLink to='/action'>АКЦИИ</NavLink>
                    <NavLink to='/services'>УСЛУГИ</NavLink>
                    <NavLink to='/doctors'>ВРАЧИ</NavLink>
                    <NavLink to='/vacanc'>ВАКАНСИИ</NavLink>
                    <NavLink to='/kontakt'>КОНТАКТЫ</NavLink>
                    <NavLink to='/vopros'>ВОПРОС-ОТВЕТ</NavLink>   
                </div> 
                <div className='kab'>
                    <NavLink to='/profile'> ЛИЧНЫЙ КАБИНЕТ</NavLink>
                </div>
            </div>

        </nav>
    )
}

export default Nav;

 