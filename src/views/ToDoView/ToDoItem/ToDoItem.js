import React from 'react';
import styles from './ToDoItem.module.scss';

const ToDoItem = ({ name }) => {

    return (
        <li className={styles.list}>
            <p className={styles.p}><span>✔</span>{name}</p>
        </li>
    );
};

export default ToDoItem;
