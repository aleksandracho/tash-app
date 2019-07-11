import React from 'react';
import styles from "../Radio/Radio.module.scss";

const Radio = ({id, checked, onChange, htmlFor, child}) => (
    <label className={styles.container}>
        <input className={styles.radio}
               className={styles.shopping}
               id={id}
               type="radio"
               checked={checked}
               onChange={onChange}
               htmlFor={htmlFor}

        />
        {child}
        <span className={styles.checkmark}></span>

    </label>
);

export default Radio;
