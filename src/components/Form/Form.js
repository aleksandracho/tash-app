import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';

const types = {
    items: "items",
    toDo: "toDo"
};

const descriptions = {
    items: "buy:",
    toDo: "do:"
};

class Form extends React.Component {

    state = {
        actionType: types.items,
        name: "",
        amount: "",
        category: ""
    };

    handleRadioButtonChange = types => {
        this.setState({
            actionType: types,
        })
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.name === "amount" ? parseInt(e.target.value) : e.target.value,
        });
    };

    render() {
        const {actionType} = this.state;
        return (
            <AppContext.Consumer>
                {context => (
                    <form
                        onSubmit={(e) => context.addItem(e, this.state)}
                        className={styles.form}
                    >
                        <Radio
                            id={types.items}
                            checked={actionType === types.items}
                            onChange={() => this.handleRadioButtonChange(types.items)}
                            htmlFor={types.items}
                            child="Shopping"
                        />
                        <Radio
                            id={types.toDo}
                            checked={actionType === types.toDo}
                            onChange={() => this.handleRadioButtonChange(types.toDo)}
                            htmlFor={types.toDo}
                            child="To do"
                        />
                        <p className={styles.paragraph}>Remind me to {descriptions[this.state.actionType]}</p>
                        <Input
                            handleInputChange={this.handleInputChange}
                            value={this.state.name}
                            name="name"
                            showInput={true}
                            type="text"
                        />
                        <Input
                            handleInputChange={this.handleInputChange}
                            value={this.state.amount}
                            name="amount"
                            showInput={this.state.actionType === types.items}
                            type="number"
                        />
                        <Input
                            handleInputChange={this.handleInputChange}
                            value={this.state.category}
                            name="category"
                            type="text"
                            showInput={this.state.actionType === types.items}
                        />
                        <input className={styles.img}
                               placeholder="image"
                        />
                        <button
                            type="submit"
                            className={styles.button}
                        >
                            add
                        </button>
                    </form>
                )}
            </AppContext.Consumer>
        )

    }
}

export default Form;
