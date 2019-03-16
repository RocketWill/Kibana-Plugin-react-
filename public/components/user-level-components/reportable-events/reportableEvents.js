import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";

import { EuiPanel, EuiFlexGrid } from "@elastic/eui";

export default class ReportableEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "UserName@HostName",
      events: [
        //[事件名, 狀態(0:正常; 1:異常)]
        ["WINDOWS_FILE:Execute[system].dll", 0],
        ["WINDOWS_FILE:Execute[system].dll", 0],
        ["WINDOWS_FILE:Execute[temp]", 1],
        ["WINDOWS_FILE:Permissions[windows error reporting report queue]", 0]
      ],
      errorEventClass: ""
    };
  }

  render() {
    return (
      <EuiPanel className="chart-panel">
        <div
          id="reportable-event"
          style={{ width: this.props.width, height: this.props.height }}
        >
          <h2 className="title font-white">{this.state.userName}</h2>
          {this.state.events.map((event, index) => {
            if (event[1] === 1) {
              return <p className="font-white event error-event">{event[0]}</p>;
            } else {
              return <p className="font-white event">{event[0]}</p>;
            }
          })}
        </div>
      </EuiPanel>
    );
  }
}
