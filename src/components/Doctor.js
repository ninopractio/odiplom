import React, { useState } from 'react';
import styles from '../module/Doctor.module.css';
import Modal from './Modal';
import VrachInfo from './VrachInfo';

const Doctor = ({ title, opis, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.Doctor}>
      <div className={styles.Doctor__info}>
        {image && <img src={image} alt={title} className={styles.Doctor__image} />}
        <div className={styles.Doctor__text}>
          <div className={styles.Doctor__opis}>{opis}</div>
          <div className={styles.Doctor__title}>{title}</div>
        </div>
      </div>
      <button className={styles.Doctor__button} onClick={handleOpenModal}>
        Подробнее
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <VrachInfo />
      </Modal>
    </div>
  );
};

export default Doctor;
