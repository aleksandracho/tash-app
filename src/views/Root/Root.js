import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShoppingsView from '../ShoppingsView/ShoppingsView';
import ToDosView from '../ToDosView/ToDosView';
import Navigation from '../../components/Navigation/Navigation';

const Root = () => (
    <BrowserRouter className="wrapper">
        <>
        <Navigation />
        <h1 className="mainHeader">Hello world!</h1>
           <Switch>
              <Route exact path="/" component={ShoppingsView} />
              <Route path="/todo" component={ToDosView} />
           </Switch>
        </>
    </BrowserRouter>
);

export default Root;
