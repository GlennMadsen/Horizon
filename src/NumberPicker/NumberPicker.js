import React, { Component } from 'react';
import "./NumberPicker.css";

class NumberPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: parseInt(this.props.default, 10),
			callBack: this.props.onChange
        }
    }

    render() {
        return (
            <span className="numberPicker pure-form">
                <button className="pure-button" onClick={() => this.down()}>-</button>
                <input type="text" onChange={(e) => this.enter(e)} value={this.state.currentNumber} />
                <button className="pure-button" onClick={() => this.up()}>+</button>
            </span>
        );
    }

    down = () => {
        if (typeof this.props.min !== "undefined") {
            if (this.state.currentNumber - 1 < this.props.min) {
                return;
            }
        }
		this.setState((prevState, props) => {
			return {currentNumber: prevState.currentNumber - 1};
		},this.triggerChange);
    }

    up = () => {
        if (typeof this.props.max !== "undefined") {
            if (this.state.currentNumber + 1 > this.props.max) {
                return;
            }
        }
		this.setState((prevState, props) => {
			return {currentNumber: prevState.currentNumber + 1};
		},this.triggerChange);
    }

    enter = (event) => {
        var num = parseInt(event.currentTarget.value + "",10);
        this.setState({currentNumber:num},this.triggerChange);
    }

	triggerChange() {
		this.state.callBack(this.state.currentNumber);
	}
}

export default NumberPicker;
