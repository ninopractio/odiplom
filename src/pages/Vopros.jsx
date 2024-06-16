import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import s from "../module/pages/Vopros.module.css";
import Vopros from '../components/Vopros';
import Footer2 from "../components/Footer2";
import QuestionForm from "../components/QuestionForm";

const vopros = [
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},
  { title: 'Как и куда можно принести продукты, вещи  человеку в больницу?', opis: 'Вы оставляете свои данные в форме на сайте '},

 
];

const Voprosi = () => {
  return (
    
    <section className = {s.cont}>
      <Nav />
      
    
      <div className = {s.container}>
        <div className={s.form}>
          <QuestionForm/>
      </div>
      {vopros.map((vopros) => (
        <Vopros key={vopros.title} title={vopros.title} opis = {vopros.opis} />
      ))}
    </div>
    
    <Footer2 />
    </section>
  );
};
export default Voprosi;