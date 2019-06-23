import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModal, addItem }) => (
    <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={closeModal} />
        <Form addItem={addItem}/>
    </div>
);

export default Modal;