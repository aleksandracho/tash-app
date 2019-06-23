import React from 'react';
import { ShoppingList } from  '../Root/Root'
import ShoppingItem from './ShoppingItem/ShoppingItem';
import styles from './ShoppingViewWrapper.module.scss'

const ShoppingViewWrapper = () => (
    <ul className={styles.shoppingViewWrapper}>
        {ShoppingList.map( (item) => (
            <ShoppingItem key={item.name} {...item} />
        ))}
    </ul>
);

export default ShoppingViewWrapper;
