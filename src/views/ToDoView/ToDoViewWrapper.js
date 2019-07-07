import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import AppContext from '../../context';

const ToDoViewWrapper = () => (
    <AppContext.Consumer>
        {(context) => {
            return (
                <ul>
                    {context.toDo.map( (item) => (
                        <ToDoItem key={item.name} {...item} />
                    ))}
                </ul>)
        }}

    </AppContext.Consumer>
);

export default ToDoViewWrapper;
