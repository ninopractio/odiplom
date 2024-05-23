import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Form from "../components/Form";
import s from "../module/About.module.css";
import logoSvg from "../img/logo.svg";
import chatSvg from "../img/chat.svg";
import tgSvg from "../img/tg.svg";
import { NavLink } from "react-router-dom";
import Vrachi from "../components/Vrachi";
import Services from "../components/Services";
import Contacts from "../components/Contacts";
import Act from "../components/Act";
import Footer from "../components/Footer";


  {/* <div className={s.about}>
        <img src={logoSvg} alt="ЛОГО" className={s.picture} />
      </div> */}
const About = () => {
 
    return (
   
        <section className="container">
            <Nav />
            <div className={s.block}>
                <div className={s.textosn}>
                    Мы рады приветствовать Вас на нашем сайте! <br></br>
                    При возникновении тревожных симптомов и ухудшении самочувствия очень важно своевременно выявить точную причину недомогания, чтобы назначить эффективные меры решения проблемы. Обратитесь в нашу клинику, чтобы оценить состояние внутренних органов и систем организма перед дальнейшим лечением.

                    «Олива-Мед» - новый диагностический центр в Ростове-на-Дону.

                    Приоритетом в работе клиники является индивидуальный подход к пациентам всех возрастов. 
                    Здесь трудятся квалифицированные, опытные врачи, постоянно изучающие инновационные методики и новинки сферы, повышающие свой уровень, подходящие к каждой задаче с максимальным вниманием и ответственностью. 
                    Использование передового оборудования экспертного класса гарантирует не только надежность результатов, но и полную безопасность процедур без побочных последствий. 
                   
                    

                    Мы рады каждому пациенту нашей клиники, и стремимся чтобы Вы имели доступ к современным методам диагностики и лечения, проводимых по международным стандартам. <br></br>  
                    Стараемся для Вас!               
                </div>
            </div>
            <div className={s.services}>
               <Services/> 
            </div>
            <div className={s.vrachi}>
               <Vrachi/> 
            </div>
            <div className={s.contacts}>
               <Contacts/> 
            </div>
            <div><Footer/></div>
            
            
           
            
            
          


        </section>
    );
};

export default About;