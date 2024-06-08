import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Form from "../components/Form";
import s from "../module/pages/Action.module.css";
import logoSvg from "../img/logo.svg";
import chatSvg from "../img/chat.svg";
import tgSvg from "../img/tg.svg";
import { NavLink } from "react-router-dom";
import Vrachi from "../components/Vrachi";
import Services from "../components/Services";
import Contacts from "../components/Contacts";
import Act from "../components/Act";
import Footer from "../components/Footer";
import ActdocPng from "../img/actdoc.png";


const Action = () => {

    return (

        <section className="container">
            <Nav />
            <div className={s.block}>
                <div className={s.textosn}>
                    Клиника "Олива-Мед" регулярно проводит акции, направленные на повышение доступности медицинских услуг и улучшение здоровья населения. Эти акции включают:<br></br>


                    • Скидки на медицинские услуги: скидки на широкий спектр медицинских услуг, включая консультации специалистов и диагностические процедуры.<br></br>
                    • Бесплатные консультации: Клиника проводит бесплатные консультации по различным медицинским вопросам, включая профилактику заболеваний, лечение хронических заболеваний и здоровый образ жизни.<br></br>
                    • Семейные скидки: Клиника предлагает семейные скидки, позволяя семьям экономить на медицинских услугах.<br></br>
                    • Социальные скидки: Клиника предоставляет скидки социально незащищенным слоям населения, таким как пенсионеры, инвалиды и малоимущие.<br></br>

                    Акции клиники "Олива-Мед" направлены на то, чтобы сделать медицинскую помощь более доступной и привлекательной для всех. Клиника стремится предоставлять качественные медицинские услуги по доступным ценам, помогая пациентам улучшить свое здоровье и благополучие.
                </div>
            </div>
            <div className={s.image}>
                <img src ={ActdocPng} alt = "ДОКАКЦИЙ"></img>
            </div>
            <div className={s.services}>
                <Act />
            </div>

            <div className={s.contacts}>
                <Contacts />
            </div>
            <div><Footer /></div>








        </section>
    );
};

export default Action;