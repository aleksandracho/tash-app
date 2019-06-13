import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShoppingView from '../ShoppingView/ShoppingView';
import ToDosView from '../ToDosView/ToDosView';
import Navigation from '../../components/Navigation/Navigation';

const Root = () => (
    <BrowserRouter className="wrapper">
        <>
        <Navigation />
        <h1 className="mainHeader">Hello world!</h1>
           <Switch>
              <Route exact path="/" component={ShoppingView} />
              <Route path="/todo" component={ToDosView} />
           </Switch>
        </>
    </BrowserRouter>
);

export default Root;
