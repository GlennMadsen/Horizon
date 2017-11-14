import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import DatePicker from './DatePicker/DatePicker.js';
import PopupButton from './Popup/PopupButton.js';

document.querySelector("body").style.background = "url(http://lorempixel.com/" + Math.min(window.innerWidth,1920) + "/" + Math.min(window.innerHeight, 1920) + "?r="+Math.random()+")";

ReactDOM.render(<PopupButton lable="Choose A Date" onSubmit={(moment) => alert(moment.format("MMMM DD, YYYY"))}><DatePicker time={Date.now()} /></PopupButton>, document.querySelector("#app"));
registerServiceWorker();
