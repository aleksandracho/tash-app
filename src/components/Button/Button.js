import React from 'react';
import styles from './Button.module.scss';

const Button = ({handleClick}) => (
    <div onClick={handleClick}
         className={styles.button}>
        add
    </div>
);

export default Button;