import React from 'react';

class Counter extends React.Component {

    state = {
        count: 0
    };

    increment = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }

    decrement = () => {
        this.setState((prevState) => ({count: prevState.count - 1}));
    }

    reset = () => {
        this.setState(() => ({count: 0}));
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.reset}> Reset </button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default Counter;