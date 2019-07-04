import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShoppingViewWrapper from '../ShoppingViewWrapper/ShoppingViewWrapper';
import ToDosView from '../ToDosView/ToDosView';
import Navigation from '../../components/Header/Navigation/Navigation';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header/Header';
import AppContext from '../../context';

class Root extends React.Component {
    state = {
        items: [],
        toDos: [],
        isModalOpen: true,
    };

    addItem = (e) => {
        e.preventDefault();
        const newItem = {
            name: e.target[0].value,
            amount: parseInt(e.target[1].value),
            category: e.target[2].value
        };

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }));

        e.target.reset();
    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    };

    render() {
        const {isModalOpen} = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem
        };

        return (
            <BrowserRouter className="wrapper">
                <AppContext.Provider value={contextElements}>
                    <Header openModal={this.openModal}/>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={ShoppingViewWrapper}/>
                        <Route path="/todo" component={ToDosView}/>
                    </Switch>
                    {isModalOpen && <Modal addItem={this.addItem} closeModal={this.closeModal}/>}
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
