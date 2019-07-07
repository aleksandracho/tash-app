import React from 'react';
import styles from './Header.module.scss';
import Button from '../../Button/Button'

const Header = ({ openModal }) => (
    <header>
        <h1 className={styles.mainHeader}>tash App</h1>
        <Button handleClick={openModal} />

    </header>
);

export default Header;
