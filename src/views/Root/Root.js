import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShoppingViewWrapper from '../ShoppingViewWrapper/ShoppingViewWrapper';
import ToDoViewWrapper from '../ToDoView/ToDoViewWrapper';
import Navigation from '../../components/Header/Navigation/Navigation';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header/Header';
import AppContext from '../../context';

class Root extends React.Component {
    state = {
        items: [],
        toDo: [],
        isModalOpen: true,
    };

    addItem = (e, newItem) => {
        e.preventDefault();

        this.setState(prevState => {
            return {
                [newItem.actionType]: [...prevState[newItem.actionType], newItem],
            }
        });

        this.closeModal();
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
                        <Route path="/todo" component={ToDoViewWrapper}/>
                    </Switch>
                    {isModalOpen && <Modal closeModal={this.closeModal}/>}
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
