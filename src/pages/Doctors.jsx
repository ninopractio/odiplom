import React from "react";
import Nav from "../components/Nav";
import s from "../module/pages/Services.module.css";
import Doctor from '../components/Doctor';
import Footer2 from "../components/Footer2";

const doctors = [
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    { title: 'Киселев Алексей Евгеньевич', opis: 'Офтальмолог', image: require('../img/doc.svg').default },
    

];

const Doctors = () => {
  return (
    <section className={s.cont}>
      <Nav />
      <div className={s.container}>
        {doctors.map((doctor) => (
          <Doctor key={doctor.title} title={doctor.title} opis={doctor.opis} image={doctor.image} />
        ))}
      </div>
      <Footer2 />
    </section>
  );
};

export default Doctors;
