import React, { Component } from 'react';
import Popup from './Popup.js';
import './Popup.css';

class PopupButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			popupOpen: false,
			callBack: props.onSubmit
		}
	}

    render() {
		if (this.state.popupOpen) {
			return (
				<button className="popupButton pure-button" >{this.props.lable}</button>,
				<Popup onClose={() => this.closePopup()}>{React.cloneElement(React.Children.only(this.props.children),{onAccept:(e) => this.onAccept(e)})}</Popup>
			);
		}
        return (
			<button className="popupButton pure-button" onClick={() => this.openPopup()}>{this.props.lable}</button>
        );
    }

	openPopup = () => {
		this.setState({popupOpen:true});
	}

	closePopup = () => {
		this.setState({popupOpen:false});
	}

	onAccept = (x) => {
		this.setState({popupOpen:false},this.state.callBack(x));
	}
}

export default PopupButton;
