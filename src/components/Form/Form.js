import React from 'react';
import styles from './Form.module.scss';

class Form extends React.Component {

    state = {
        name: "",
        amount: "",
        category: ""
    };


    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        this.props.addItem(e);
    };

    render() {
        return (
            <>
                <p className={styles.paragraph}>Remember me to buy:</p>
                <form
                    onSubmit={this.handleSubmit}
                    className={styles.form}>
                    <input
                        type="text"
                        className={styles.input}
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        placeholder="name"
                        name="name"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        className={styles.input}
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        placeholder="amount"
                        name="amount"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        className={styles.input}
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        placeholder="category"
                        name="category"
                        autoComplete="off"
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
            </>
        )

    }
};

export default Form;
