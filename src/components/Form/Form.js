import React from 'react';
import styles from './Form.module.scss';

class Form extends React.Component {
    state = {
        name: "",
        amount: "",
        category: "",
    };

        handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {

        console.log(this.state.name);


        return (
            <>
                <p className={styles.paragraph}>Remember me to buy:</p>
                <form className={styles.form}>
                    <input
                        className={styles.input}
                        onChange={this.handleInputChange}
                        placeholder="name"
                        name="name"
                    />
                    <input className={styles.input}
                           onChange={this.handleInputChange}
                           placeholder="amount"
                           name="amount"
                    />
                    <input className={styles.input}
                            onChange={this.handleInputChange}
                            placeholder="category"
                            name="category"
                    />
                    <input className={styles.img}
                           placeholder="image"
                    />
                </form>
                <button className={styles.button}>add</button>
            </>
        )

    }
};

export default Form;
