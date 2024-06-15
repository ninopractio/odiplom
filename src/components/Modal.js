import React from 'react';
import styles from '../module/Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.close_button} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
