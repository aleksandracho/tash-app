import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ addItem, closeModal}) => (
    <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={closeModal}> x </button>
        <Form />
    </div>
);

export default Modal;
