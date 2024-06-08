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
                    <NavLink to='/slabo'>ВРАЧИ</NavLink>
                    <NavLink to='#'>ВАКАНСИИ</NavLink>
                    <NavLink to='#'>КОНТАКТЫ</NavLink>
                    <NavLink to='#'>ВОПРОС-ОТВЕТ</NavLink>
                   
                </div> 
                <div className='kab'>
                    <NavLink to='#'> ЛИЧНЫЙ КАБИНЕТ</NavLink>
                </div>
            </div>

        </nav>
    )
}

export default Nav;

 