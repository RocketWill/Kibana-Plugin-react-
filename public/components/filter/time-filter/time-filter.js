import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import React, { Component } from "react";

import { EuiPanel, EuiFlexGrid } from "@elastic/eui";

export default class TimeFilter extends Component {
  static defaultProps = {
    numberOfMonths: 2
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.submit = this.submit.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
    this.props.handleTimeRange("01/01/2018", "12/31/2019");
  }

  submit(){
    this.props.handleTimeRange(this.state.from.toLocaleDateString(), this.state.to.toLocaleDateString());
  }

  componentDidMount() {}

  show(){}

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    //樣式表
    const style = `
    .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: #f0f8ff;
      color: #FF7E53;
    }
    .Selectable .DayPicker-Day {
      border-radius: 0 !important;
    }
    .Selectable .DayPicker-Day--start {
      border-top-left-radius: 50% !important;
      border-bottom-left-radius: 50% !important;
    }
    .Selectable .DayPicker-Day--end {
      border-top-right-radius: 50% !important;
      border-bottom-right-radius: 50% !important;
    }
  `
    return (
      <EuiPanel className="chart-panel">
        <div className="time-filter">
          <DayPicker
            className="Selectable"
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
          />
          <p className="range">
            {!from && !to && "Please select the first day."}
            {from && !to && "Please select the last day."}
            {from &&
              to &&
              `Selected from ${from.toLocaleDateString()} to
                  ${to.toLocaleDateString()}`}{" "}
          </p>

          <p id="time-start">{from && to && `${from.toLocaleDateString()}`}</p>

          <p id="time-end">{from && to && `${to.toLocaleDateString()}`}</p>

          {from && to && (
            <button
              className="btn btn-reset"
              onClick={this.handleResetClick}
            >
              Reset
            </button>
          )}
          <br />
          {from && to && (
            <button className="btn btn-submit" onClick={this.submit}>
              Submit
            </button>
          )}

          <Helmet>
            <style>{style}</style>
          </Helmet>
        </div>
      </EuiPanel>
    );
  }
}
