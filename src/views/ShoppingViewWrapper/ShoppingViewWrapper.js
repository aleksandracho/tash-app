import React from 'react';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import styles from './ShoppingViewWrapper.module.scss';
import AppContext from '../../context'

const ShoppingViewWrapper = () => (
    <AppContext.Consumer>
        {(context) => {
            return (
                <ul className={styles.shoppingViewWrapper}>
                    {context.items.map( (item) => (
                        <ShoppingItem key={item.name} {...item} />
                    ))}
                </ul>)
        }}

    </AppContext.Consumer>
);

export default ShoppingViewWrapper;
