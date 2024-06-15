import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Form from "../components/Form";
import s from "../module/pages/Kontakt.module.css";
import Vrachi from "../components/Vrachi";
import Services from "../components/Services";
import Contacts from "../components/Contacts";
import Act from "../components/Act";
import Footer from "../components/Footer";



const Kontakt = () => {

    return (

        <section className="container">
            <Nav />
            <div className={s.block}>
                <div className={s.textosn}>
                    Наша миссия - обеспечить доступную и высококачественную медицинскую помощь каждому пациенту, создавая комфортную и доверительную атмосферу.
                    Мы всегда рады помочь вам!

                    Свяжитесь с нами для записи на прием, получения консультации или уточнения информации о наших услугах.<br></br>

                    Наши контакты:<br></br>

                    • Адрес:улица Зорге 16/190<br></br>
                    • Телефон: +7 988 255 5077<br></br>
                    • Email: olivamedeco@gmail.com <br></br>

                    Часы работы:<br></br>

                    • 08:00-20:00<br></br>
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

export default Kontakt;