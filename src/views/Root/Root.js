import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShoppingViewWrapper from '../ShoppingViewWrapper/ShoppingViewWrapper';
import ToDosView from '../ToDosView/ToDosView';
import Navigation from '../../components/Header/Navigation/Navigation';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header/Header';

export const ShoppingList = [
    {
        name: 'milk',
        amount: 6,
        category: 'grocery products', // will be selectable in the future
        image: 'https://unsplash.it/100/100', // it will be a link
    },
    {
        name: 'shampoo',
        amount: 1,
        category: 'drugstore products', // will be selectable in the future
        image: 'https://unsplash.it/100/100', // it will be a link
    },
    {
        name: 'toothpaste',
        amount: 2,
        category: 'drugstore products', // will be selectable in the future
        image: 'https://unsplash.it/100/100', // it will be a link
    },
    {
        name: 'coffee',
        amount: 3,
        category: 'grocery products', // will be selectable in the future
        image: 'https://unsplash.it/100/100', // it will be a link
    },
    {
        name: 'pasta',
        amount: 1,
        category: 'grocery products', // will be selectable in the future
        image: 'https://unsplash.it/100/100', // it will be a link
    },
];

class Root extends React.Component {
    state = {
        items: [...ShoppingList],
        isModalOpen: false,
    };

    addItem = (e) => {
        e.preventDefault();
        const newItem = {
            name: e.target[0].value,
            amount: e.target[1].value,
            category: e.target[3].value
        };

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }), () => {
            // @TODO: remove callback function
            console.log('==============');
            console.log(this.state.items);
        });

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

        return (
            <BrowserRouter className="wrapper">
                <>
                    <Header openModal={this.openModal}/>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={ShoppingViewWrapper}/>
                        <Route path="/todo" component={ToDosView}/>
                    </Switch>
                    {isModalOpen && <Modal addItem={this.addItem} closeModal={this.closeModal}/>}
                </>
            </BrowserRouter>
        );
    }
}

export default Root;
