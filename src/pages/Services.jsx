// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../module/pages/Services.module.css'; // Добавляем CSS стили для страницы услуг

// function Services() {
//   const [services, setServices] = useState([]); // Используем useState для хранения списка услуг

//   useEffect(() => {
//     loadServices();
//   }, []);

//   const loadServices = async () => {
//     try {
//       const res = await axios.get('http://localhost:8000/api/medicalservices/');
//       setServices(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="services">
//       <h1>Услуги Медицинской Клиники</h1>
//       <div className="services-list">
//         {services.map((service) => (
//           <div key={service.id} className="service-item">
//             <h2>{service.name}</h2>
//             <p>Цена: {service.price} руб.</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Services;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import '../module/pages/Services.module.css';

function Services() {
  // Создаем состояние для хранения данных.
  const [medicalServices, setMedicalServices] = useState([]);

  useEffect(() => {
    // Замените 'http://localhost:8000/api/medicalservices/' на URL вашего API.
    axios.get('http://localhost:8000/api/medicalservices/')
      .then(response => {
        // Сохраняем данные в состоянии.
        setMedicalServices(response.data);
      })
      .catch(error => {
        // Обработка ошибки.
        console.error("Ошибка при запросе к API: ", error);
      });
  }, []); // Пустой массив зависимостей означает, что вызов API будет выполнен один раз после монтирования компонента.

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Отрисовываем данные на странице */}
        <div>
          {medicalServices.map(service => (
            <div key={service.id }>
              <h2>{service.name}</h2>
              <p>{service.price}</p>
            </div>
          ))}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Services;