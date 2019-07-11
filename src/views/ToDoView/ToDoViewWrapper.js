import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import AppContext from '../../context';
import styles from './ToDoVIewWrapper.module.scss'

const ToDoViewWrapper = () => (
    <AppContext.Consumer>
        {(context) => {
            return (
                <ul className={styles.ToDoViewWrapper}>
                    {context.toDo.map( (item) => (
                        <ToDoItem key={item.name} {...item} />
                    ))}
                </ul>)
        }}

    </AppContext.Consumer>
);

export default ToDoViewWrapper;
