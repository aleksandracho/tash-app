import React from 'react';
import styles from './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShoppingViewWrapper from '../ShoppingViewWrapper/ShoppingViewWrapper';
import ToDosView from '../ToDosView/ToDosView';
import Navigation from '../../components/Navigation/Navigation';

const Root = () => (
    <BrowserRouter className="wrapper">
        <>
            <h1 className={styles.mainHeader}>tash App</h1>
            <Navigation />
           <Switch>
              <Route exact path="/" component={ShoppingViewWrapper} />
              <Route path="/todo" component={ToDosView} />
           </Switch>
        </>
    </BrowserRouter>
);

export default Root;
