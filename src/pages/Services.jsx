import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import s from "../module/pages/Services.module.css";
import Cell from '../components/Cell';

const services = [
  { title: 'Услуга 1', price: '1000 руб.' },
  { title: 'Услуга 2', price: '1500 руб.' },
  { title: 'Услуга 3', price: '2000 руб.' },
];

const Services = () => {
  return (
    <section className = {s.container}>
      <Nav />
      <div>
      {services.map((service) => (
        <Cell key={service.title} title={service.title} price={service.price} link="/form" />
      ))}
    </div>
    </section>
  );
};

export default Services;