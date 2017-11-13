import React, { Component } from 'react';
import NumberPicker from '../NumberPicker/NumberPicker.js';
import {EnumPicker, EnumOption} from '../EnumPicker/EnumPicker.js';
import './DatePicker.css';

const moment = require('moment');

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:moment(props.time),
            callBack: props.onAccept
        };
    }

    render() {
        var thisMoment = this.state.time;
        var m = thisMoment.clone();
        m.date(1);
        m.day(0);
        var tableRows = [];
        tableRows[0] = [];
        var i = 0;
        while (m.isBefore(thisMoment) || m.month() === thisMoment.month() || tableRows[i].length % 7 !== 0) {
            if (tableRows[i].length >= 7) {
                i++;
                tableRows[i] = [];
            }
            var classes = "";
            if (m.month() !== thisMoment.month()) {
                classes += "outsideMonth ";
            } if (m.isSame(thisMoment)) {
                classes += "selected ";
            }
            tableRows[i][tableRows[i].length] = {className:classes,date:m.date(),m:m.clone()};
            m.day(m.day() + 1);
        }

        return (
            <div className="datePickerCover">
    			<div className="datePicker">
                    <div className="year">
                        <NumberPicker onChange={this.changeYear} value={this.state.time.year()} min="-270000" max="270000" default={thisMoment.format("YYYY")} />
                    </div>
                    <div className="month">
    					<EnumPicker onChange={this.changeMonth} value={this.state.time.month()}>
                            <EnumOption value={0} lable="January" />
                            <EnumOption value={1} lable="Febuary" />
                            <EnumOption value={2} lable="March" />
                            <EnumOption value={3} lable="April" />
                            <EnumOption value={4} lable="May" />
                            <EnumOption value={5} lable="June" />
                            <EnumOption value={6} lable="July" />
                            <EnumOption value={7} lable="August" />
                            <EnumOption value={8} lable="September" />
                            <EnumOption value={9} lable="October" />
                            <EnumOption value={10} lable="November" />
                            <EnumOption value={11} lable="December" />
                        </EnumPicker>
    				</div>
                    <table className="pure-table">
        				<thead>
                            <tr>
            					<th>Sun</th>
            					<th>Mon</th>
            					<th>Tue</th>
            					<th>Wed</th>
            					<th>Thu</th>
            					<th>Fri</th>
            					<th>Sat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((row, key) =>
                                <tr key={key}>
                                    {row.map((day, key) =>
                                        <td key={key} onClick={(e) => this.selectDay(e, day.m)} className={day.className}>{day.date}</td>
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
    				<button className="pure-button" onClick={this.Accept}>Accept</button>
    			</div>
    		</div>
        );
    }

    selectDay = (x, m) => {
        this.setState({time:m});
    }

    Accept = () => {
        this.state.callBack(this.state.time);
    }

    changeYear = (y) => {
        this.setState((prevState, props) => {
            return {time: prevState.time.year(y)};
        });
    }

    changeMonth = (m) => {
        this.setState((prevState, props) => {
            return {time: prevState.time.month(m)};
        });
    }
}

export default DatePicker;
