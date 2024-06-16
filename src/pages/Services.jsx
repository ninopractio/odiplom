import React from "react";
import Nav from "../components/Nav";
import s from "../module/pages/Services.module.css";
import Cell from '../components/Cell';
import Footer2 from "../components/Footer2";

const services = [
  
  { title: 'УЗИ почек и надпочечников', price: '900 руб.' },
  { title: 'УЗИ фолликулогенеза', price: '600 руб.' },
  { title: 'УЗИ фолликулогенеза', price: '600 руб.' },
  { title: 'УЗИ фолликулогенеза', price: '600 руб.' },
  { title: 'УЗИ фолликулогенеза', price: '600 руб.' },
  { title: 'УЗИ фолликулогенеза', price: '600 руб.' },
  { title: 'УЗИ фолликулогенеза', price: '600 руб.' },
];

const Services = () => {
  return (

    <section className={s.cont}>
      <Nav />
      <div className={s.container}>
        {services.map((service) => (
          <Cell key={service.title} title={service.title} price={service.price} link="/form" />
        ))}
      </div>

      <Footer2 />
    </section>
  );
};

export default Services;