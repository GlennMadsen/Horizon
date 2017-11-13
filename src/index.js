import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import DatePicker from './DatePicker/DatePicker.js';
import PopupButton from './Popup/PopupButton.js';

ReactDOM.render(<PopupButton lable="Choose A Date" onSubmit={(moment) => alert(moment.format("MMMM DD, YYYY"))}><DatePicker time={Date.now()} /></PopupButton>, document.querySelector("#app"));
registerServiceWorker();
