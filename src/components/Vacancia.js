import React, { useState } from "react";
import styles from '../module/Vacancia.module.css';
import { Link } from "react-router-dom";
import Formvac from './Formvac';
import Modal from './Modal';

const Vacancia = ({ title, opis, price, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.Vacancia}>
      <div className={styles.Vacancia__title}>{title}</div>
      <div className={styles.Vacancia__price}>{price}</div>
      <div className={styles.Vacancia__opis}>{opis}</div>    
      <button className={styles.Vacancia__button} onClick={handleOpenModal}>
        Откликнуться
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Formvac />
      </Modal>
    </div>
  );
}

export default Vacancia;
