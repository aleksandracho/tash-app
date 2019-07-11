import React from 'react';
import styles from './Input.module.scss';

const Input = ({handleInputChange, value, name, showInput, type}) => {
    return showInput ?
        (
            <input
                type={type}
                className={name === "amount" ? styles.amount : styles.input}
                value={value}
                onChange={handleInputChange}
                placeholder={name}
                name={name}
                autoComplete="off"
            />
        )
        : null;
};

export default Input;
