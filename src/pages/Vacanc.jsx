import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import s from "../module/pages/Vacanc.module.css";
import Vacancia from '../components/Vacancia';
import Footer2 from "../components/Footer2";

const vacancii = [
  { title: 'Врач-Узист', price: '46000 руб.', opis: 'оригинальная вакансия специалиста профессионала '},
  { title: 'Массажист', price: '90000 руб.',opis: 'оригинальная вакансия специалиста профессионала '  },
  { title: 'Офтальмолог', price: '60000 руб.',opis: 'оригинальная вакансия специалиста профессионала '  },
  { title: 'Гинеколог', price: '50000 руб.',opis: 'оригинальная вакансия специалиста профессионала '  },
  { title: 'Диетолог', price: '45000 руб.',opis: 'оригинальная вакансия специалиста профессионала '  },
  { title: 'Уролог', price: '32000 руб.',opis: 'оригинальная вакансия специалиста профессионала '  },
  { title: 'Терапевт', price: '76600 руб.',opis: 'оригинальная вакансия специалиста профессионала '  },
  { title: 'Психолог', price: '25600 руб.' ,opis: 'оригинальная вакансия специалиста профессионала ' }, 
];

const Vacanc = () => {
  return (
    
    <section className = {s.cont}>
      <Nav />
      <div className = {s.container}>
      {vacancii.map((vacancia) => (
        <Vacancia key={vacancia.title} title={vacancia.title} price={vacancia.price} opis = {vacancia.opis} link="/form" />
      ))}
    </div>
    
    <Footer2 />
    </section>
  );
};
export default Vacanc;