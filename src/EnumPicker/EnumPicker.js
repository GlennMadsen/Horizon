import React, { Component } from 'react';
import "./EnumPicker.css";

class EnumPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
			size: React.Children.count(props.children) - 1,
			value: this.props.value,
			callBack: this.props.onChange
        }
    }

    render() {
        return (
            <span className="enumPicker pure-form">
                <button className="pure-button" onClick={() => this.down()}>-</button>
				<select onChange={this.enter} value={this.state.value}>
					{React.Children.map(this.props.children,(child) => child)}
				</select>
                <button className="pure-button" onClick={() => this.up()}>+</button>
            </span>
        );
    }

    down = () => {
        if (this.state.value - 1 < 0) {
            return;
        }
		this.setState((prevState, props) => {
			return {value: prevState.value - 1};
		},this.triggerChange);
    }

    up = () => {
		if (this.state.value + 1 > this.state.size) {
            return;
        }
		this.setState((prevState, props) => {
			return {value: prevState.value + 1};
		},this.triggerChange);
    }

    enter = (event) => {
        this.setState({value:parseInt(event.currentTarget.value, 10)},this.triggerChange);
    }

	triggerChange() {
		this.state.callBack(this.state.value);
	}
}

class EnumOption extends Component {
	render() {
		return (
			<option value={this.props.value} selected={this.props.selected}>{this.props.lable}</option>
		);
	}
}

export {EnumPicker, EnumOption};
