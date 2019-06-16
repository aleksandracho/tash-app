import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
    <ul className={styles.wrapper}>
        <li className={styles.navItem}>
            <NavLink
                exact
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink} to ="/">Shopping</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink} to ="/todo">To do</NavLink>
        </li>
    </ul>
);

export default Navigation;
