import React, { useState } from 'react';
import styles from '../module/Cell.module.css';
import Modal from './Modal';
import Form from './Form';

const Cell = ({ title, price, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.Cell}>
      <div className={styles.Cell__title}>{title}</div>
      <div className={styles.Cell__price}>{price}</div>
      <button className={styles.Cell__button} onClick={handleOpenModal}>
        Записаться
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form />
      </Modal>
    </div>
  );
};

export default Cell;
