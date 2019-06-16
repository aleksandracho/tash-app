import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShoppingItem.module.scss';

const ShoppingItem = ({
        name,
        amount,
        category,
        image
    }) => {
    return (
        <li className={styles.wrapper}>
            <img className={styles.image}
                 src={image}
                 alt={name}
            />
            <div>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.amount}>{amount}</p>
                <p className={styles.category}>{category}</p>
            </div>
        </li>
    );
};

ShoppingItem.propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number,
    category: PropTypes.string,


};
ShoppingItem.defaultProps = {
    image: 'https://unsplash.it/100/100',
};

 export default ShoppingItem;