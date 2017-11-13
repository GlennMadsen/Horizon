import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			callBack: props.onClose
		}
	}

    render() {
        return (
			<div className="screen">
	            <div className="popup">
					<a className="pure-button" onClick={(e) => this.close()}>
						<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
						    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
						</svg>
					</a>
	    			{React.Children.only(this.props.children)}
	    		</div>
			</div>
        );
    }

	close = () => {
		this.state.callBack();
	}
}

export default Popup;
