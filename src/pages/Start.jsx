import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Form from "../components/Form";
import s from "../module/pages/Start.module.css";
import logoSvg from "../img/logo.svg";
import chatSvg from "../img/chat.svg";
import tgSvg from "../img/tg.svg";
import { NavLink } from "react-router-dom";
import Act from "../components/Act";
import Services from "../components/Services";
import Vrachi from "../components/Vrachi";
import Contscts from "../components/Contacts";
import Footer from "../components/Footer";


  
const Start = () => {
 
  return (
    <section className="container">
      <Nav />
      <div className={s.start}>
        <img src={logoSvg} alt="" className={s.picture} />
        <div className={s.p}>ОЛИВА-МЕД</div>
        <div className={s.podz}>
          Передовая клиника с новейшим оборудованием
          <br></br>и высоким качеством обслуживания
        </div>
      </div>
      <div className={s.aside}>
        <div className={s.fil}>
          <Form />
        </div>
      </div>
      <div className={s.butt}>
        <button type="submit">
          <img src={tgSvg} alt="Telegram" />
          <NavLink to="https://t.me/+oD3nDVRTY2kzZTVi">Олива-Мед в телеграмм</NavLink>
        </button>
       
      </div>
      <div className={s.action}>
        <Act />
      </div>
      <div>
        <Services/>
      </div>
      <div >
        <Vrachi />
      </div>
      <div>
         <Contscts />
      </div>
     
      <div classname = {s.foot}>
      <Footer />
      </div>
     
        
      
    </section>
  );
};

export default Start;