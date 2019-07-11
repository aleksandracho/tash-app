import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';

const types = {
    items: "items",
    toDo: "toDo"
};

const descriptions = {
    shopping: "buy:",
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
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { actionType } = this.state;
        return (
            <AppContext.Consumer>
                {context => (
                    <form
                        onSubmit={(e) => context.addItem(e, this.state)}
                        className={styles.form}>
                        <div className={styles.radio}>
                            <input
                                className={styles.shopping}
                                id={types.items}
                                type="radio"
                                checked={actionType === types.items}
                                onChange={() => this.handleRadioButtonChange(types.items)}
                            />
                            <label
                                htmlFor={types.items}>
                                Shopping</label>
                        </div>
                        <div className={styles.radio}>
                            <input
                                id={types.toDo}
                                type="radio"
                                checked={actionType === types.toDo}
                                onChange={() => this.handleRadioButtonChange(types.toDo)}
                            />
                            <label
                                htmlFor={types.toDo}>
                                To do</label>
                        </div>
                        <p className={styles.paragraph}>Remind me to {descriptions[this.state.actionType]}</p>
                        <input
                            type="text"
                            className={styles.input}
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            placeholder="name"
                            name="name"
                            autoComplete="off"
                        />

                        {this.state.actionType === types.items ?
                            <input
                                type="text"
                                className={styles.input}
                                value={this.state.value}
                                onChange={this.handleInputChange}
                                placeholder="amount"
                                name="amount"
                                autoComplete="off"
                            />
                            : null}

                        {this.state.actionType === types.items ?
                            <input
                                type="text"
                                className={styles.input}
                                value={this.state.value}
                                onChange={this.handleInputChange}
                                autoComplete="off"
                                placeholder="category"
                                name="category"
                            />
                            : null}

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
