import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <ul>
        <li><Link to ="/">Shopping</Link></li>
        <li><Link to ="/todo">ToDo</Link></li>
    </ul>
);

export default Navigation;
