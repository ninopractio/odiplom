import React from "react";
import styles from "../module/Act.module.css";
import doctorPng from "../img/doctor.png";
import { NavLink } from "react-router-dom";

const Act = () => {
    return (
        <div className={styles.block}>
            <div className={styles.image}>
                <img src={doctorPng} alt="Image" />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>АКЦИИ</h2>
                <p className={styles.text}>
                    Чтобы не пропускать выгодные предложения отслеживайте актуальные акции и предложения.
                    Гарантируем, что Вы останетесь довольны. <br></br>Мы предлагаем Вам:
                    <ul>
                        <li>профессионализм наших специалистов;</li>
                        <li>индивидуальный подход;</li>
                        <li>качественно выполненные услуги;</li>
                        <li>отличное настроение.</li>
                    </ul>
                </p>
                    <NavLink to="/Action" className={styles.button}>Узнать подробнее об акциях</NavLink>
                {/* ВСТАВИТЬ ССЫЛКУ */}
            </div>
        </div>
    );
};

export default Act;