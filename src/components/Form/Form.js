import React from 'react';
import styles from './Form.module.scss';

class Form extends React.Component {
    state = {
        name: "",
    };

    changeName = e => {
        this.setState({
            name: e.target.value,
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
                        onChange={this.changeName}
                        placeholder="name"
                    />
                    <input className={styles.input} placeholder="amount"/>
                    <input className={styles.input} placeholder="category"/>
                    <input className={styles.img}placeholder="image"/>
                </form>
                <button className={styles.button}>add</button>
            </>
        )

    }
};

export default Form;
