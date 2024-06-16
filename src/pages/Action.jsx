import React from "react";
import Nav from "../components/Nav";
import s from "../module/pages/Action.module.css";
import Contacts from "../components/Contacts";
import Act from "../components/Act";
import Footer from "../components/Footer";

const Action = () => {
    return (
        <section className="container">
            <Nav />
            <div className={s.block}>
                <div className={s.textosn}>
                <p>Клиника "Олива-Мед" регулярно проводит акции, направленные на повышение доступности медицинских услуг и улучшение здоровья населения. Эти акции включают:</p>
                    <ul>
                        <li>Скидки на медицинские услуги: скидки на широкий спектр медицинских услуг, включая консультации специалистов и диагностические процедуры.</li>
                        <li>Бесплатные консультации: Клиника проводит бесплатные консультации по различным медицинским вопросам, включая профилактику заболеваний, лечение хронических заболеваний и здоровый образ жизни.</li>
                        <li>Семейные скидки: Клиника предлагает семейные скидки, позволяя семьям экономить на медицинских услугах.</li>
                        <li>Социальные скидки: Клиника предоставляет скидки социально незащищенным слоям населения, таким как пенсионеры, инвалиды и малоимущие.</li>
                    </ul>
                    <p>Акции клиники "Олива-Мед" направлены на то, чтобы сделать медицинскую помощь более доступной и привлекательной для всех. Клиника стремится предоставлять качественные медицинские услуги по доступным ценам, помогая пациентам улучшить свое здоровье и благополучие.</p>
                </div>
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
